package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "user_role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    private UserRole name;
}
