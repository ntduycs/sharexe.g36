package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "image_store")
public class ImageStore {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String imageName;
    private String imageType;
    private String downloadLink;

    public ImageStore(String imageName, String imageType, String downloadLink) {
        this.imageName = imageName;
        this.imageType = imageType;
        this.downloadLink = downloadLink;
    }

    public ImageStore(String imageName, String imageType) {
        this.imageName = imageName;
        this.imageType = imageType;
    }

    public ImageStore() {
    }

    @Override
    public String toString() {
        return "ImageStore{" +
                "id='" + id + '\'' +
                ", imageName='" + imageName + '\'' +
                ", imageType='" + imageType + '\'' +
                ", downloadLink='" + downloadLink + '\'' +
                '}';
    }
}
