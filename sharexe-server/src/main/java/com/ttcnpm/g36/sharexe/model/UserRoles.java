package com.ttcnpm.g36.sharexe.model;

import javax.persistence.*;

@Entity
@Table(name = "user_roles", schema = "sharexe_new")
@IdClass(UserRolesPK.class)
public class UserRoles {
    private Long userId;
    private Long roleId;

    @Id
    @Column(name = "user_id")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Id
    @Column(name = "role_id")
    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserRoles userRoles = (UserRoles) o;

        if (userId != null ? !userId.equals(userRoles.userId) : userRoles.userId != null) return false;
        if (roleId != null ? !roleId.equals(userRoles.roleId) : userRoles.roleId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (roleId != null ? roleId.hashCode() : 0);
        return result;
    }
}
