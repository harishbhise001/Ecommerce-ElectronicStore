package com.app.repository;

import java.util.Optional;
import com.app.entities.*;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity,Long>{
 //find by role : enum
	Optional<RoleEntity> findByRoleName(RoleEnum role);
	Set<RoleEntity> findByRoleNameIn(Set<RoleEnum> roles);
}
