package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 50)
    private RoleName name;

    public Role() {
    }

    public Role(RoleName name) {
        this.name = name;
    }

    public void setName(RoleName name) {
        this.name = name;
    }
}
