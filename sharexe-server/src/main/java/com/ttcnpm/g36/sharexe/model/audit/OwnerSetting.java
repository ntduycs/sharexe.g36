package com.ttcnpm.g36.sharexe.model.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Getter
@Setter
@JsonIgnoreProperties(value = {"createdBy"}, allowGetters = true)
public abstract class OwnerSetting extends TimeSetting {
    @CreatedBy
    @Column(updatable = false)
    private Long createdBy;
}
