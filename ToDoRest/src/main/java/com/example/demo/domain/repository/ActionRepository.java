package com.example.demo.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.domain.model.Action;

@Repository
public interface ActionRepository extends JpaRepository<Action, Long> {


}
