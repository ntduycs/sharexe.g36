package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.model.ImageStore;
import com.ttcnpm.g36.sharexe.payload.ImageResponse;
import com.ttcnpm.g36.sharexe.repository.ImageStorageRepository;
import com.ttcnpm.g36.sharexe.service.ImageStorageService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class ImageStorageController {
    public ImageStorageController(ImageStorageService imageStorageService, ImageStorageRepository imageStorageRepository) {
        this.imageStorageService = imageStorageService;
        this.imageStorageRepository = imageStorageRepository;
    }

    private final ImageStorageService imageStorageService;
    private final ImageStorageRepository imageStorageRepository;

    @PostMapping("/upload")
    public ImageResponse uploadSingleFile(@RequestParam("file") MultipartFile file) {
        ImageStore newImage = imageStorageService.storeFile(file);

        String downloadLink = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(newImage.getId())
                .toUriString();

        newImage.setDownloadLink(downloadLink);

        imageStorageRepository.save(newImage);

        return new ImageResponse(downloadLink);
    }
}
