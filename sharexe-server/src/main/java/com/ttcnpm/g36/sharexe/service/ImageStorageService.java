package com.ttcnpm.g36.sharexe.service;


import com.ttcnpm.g36.sharexe.config.ImageStorageConfig;
import com.ttcnpm.g36.sharexe.exception.FileStorageException;
import com.ttcnpm.g36.sharexe.exception.ImageNotFoundException;
import com.ttcnpm.g36.sharexe.model.ImageStore;
import com.ttcnpm.g36.sharexe.repository.ImageStorageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class ImageStorageService {
    private final Path fileStorageLocation;

    private final ImageStorageRepository imageStorageRepository;

    @Autowired
    public ImageStorageService(ImageStorageConfig configuration, ImageStorageRepository imageStorageRepository) {
        this.fileStorageLocation = Paths.get(configuration.getUploadDirectory())
                .normalize();
        this.imageStorageRepository = imageStorageRepository;

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (IOException e) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", e);
        }
    }

    public ImageStore storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location
            Path targetLocation = this.fileStorageLocation.resolve(fileName);

            // Replace existing file with the same name
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            ImageStore newImage = new ImageStore(fileName, file.getContentType());
            return imageStorageRepository.save(newImage);
        } catch (IOException e) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", e);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new ImageNotFoundException("Image not found " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new ImageNotFoundException("Image not found " + fileName, e);
        }
    }

}
