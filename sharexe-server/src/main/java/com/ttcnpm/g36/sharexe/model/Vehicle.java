package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Getter
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "vehicle")
public class Vehicle extends TimeSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 50)
    private String brand;

    @NotNull
    @Size(max = 50)
    private String model;

    @NotNull
    @Size(max = 50)
    private String licensePlate;

    @NotNull
    @Size(min = 2)
    private Integer capacity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id", nullable = false)
    private Driver owner;

    @OneToMany(mappedBy = "vehicleInfo", fetch = FetchType.EAGER, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<VehicleImage> images = new ArrayList<>();

    public void addImage(VehicleImage image) {
        this.images.add(image);
        image.setVehicleInfo(this);
    }

    public void removeImage(VehicleImage image) {
        this.images.remove(image);
        image.setVehicleInfo(null);
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

    public void setOwner(Driver owner) {
        this.owner = owner;
    }

    public void setImages(List<VehicleImage> images) {
        this.images = images;
    }
}
