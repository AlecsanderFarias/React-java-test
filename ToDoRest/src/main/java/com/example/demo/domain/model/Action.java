package com.example.demo.domain.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Action {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false , length = 100)
	private String name;
	
	
	@ManyToOne
	@JoinColumn(name = "id_list")
	private ToDoList list;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean done ;


	public Long getId() {
		return id;
	}


	public ToDoList getList() {
		return list;
	}


	public void setList(ToDoList list) {
		this.list = list;
	}


	public Boolean getDone() {
		return done;
	}


	public void setDone(Boolean done) {
		this.done = done;
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



	
	
	
	
}
