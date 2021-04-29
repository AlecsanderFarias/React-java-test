package com.example.demo.domain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.model.ToDoList;


@Repository
public interface ToDoListRepository extends JpaRepository<ToDoList, Long> {


}
