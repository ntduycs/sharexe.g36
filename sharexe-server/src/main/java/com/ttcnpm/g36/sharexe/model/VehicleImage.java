package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@EqualsAndHashCode(callSuper = true)

@Entity
@Table(name = "vehicle_image")
public class VehicleImage extends TimeSetting implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicleInfo;

    @NotNull
    private String imageUrl;

    public void setVehicleInfo(Vehicle vehicleInfo) {
        this.vehicleInfo = vehicleInfo;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
