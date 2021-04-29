package com.example.demo.domain.model;

import java.util.*;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
public class ToDoList {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(nullable = false ,length = 100)
	private String name;
	
	@JsonIgnoreProperties("list")
	@OneToMany(mappedBy = "list",cascade = CascadeType.ALL , orphanRemoval = true)
	private List<Action> actions = new ArrayList<>();
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public List<Action> getActions() {
		return actions;
	}


	public void setActions(List<Action> actions) {
		this.actions = actions;
	}


	
	
}
