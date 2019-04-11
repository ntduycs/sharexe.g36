package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String brand;

    @NotBlank
    @Size(max = 50)
    private String model;

    @NotBlank
    @Size(max = 10)
    private String licensePlate;

    @NotBlank
    @Size(max = 50, min = 2)
    private Integer numSeats;

    @ElementCollection
    @CollectionTable(name = "vehicle_images", joinColumns = @JoinColumn(name = "vehicle_id"))
    @Column(name = "vehicle_image_url")
    private List<String> images;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "driver_id", nullable = false)
    private Driver owner;

    public Vehicle(@NotBlank @Size(max = 50) String brand, @NotBlank @Size(max = 50) String model,
                   @NotBlank @Size(max = 10) String licensePlate, @NotBlank @Size(max = 50, min = 2) Integer numSeats) {
        this.brand = brand;
        this.model = model;
        this.licensePlate = licensePlate;
        this.numSeats = numSeats;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public void setNumSeats(Integer numSeats) {
        this.numSeats = numSeats;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public void setOwner(Driver owner) {
        this.owner = owner;
    }
}
