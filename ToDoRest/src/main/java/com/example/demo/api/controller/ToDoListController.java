package com.example.demo.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ToDoListService;

import com.example.demo.domain.model.ToDoList;

import com.example.demo.domain.model.Action;



@RestController
@RequestMapping(path = "/todolist" , produces = MediaType.APPLICATION_JSON_VALUE)
public class ToDoListController {
	
		private ToDoListService toDoListService;
		
		
		@Autowired
		public ToDoListController(ToDoListService toDoListService) {;
			this.toDoListService = toDoListService;
		}
		
		
		@CrossOrigin
		@GetMapping
		public List<ToDoList> list(){
			return toDoListService.list();
		}
		
		@CrossOrigin
		@GetMapping("/{id}")
		public ResponseEntity<ToDoList> getList(@PathVariable(name = "id" )  Long id) {
			return ResponseEntity.ok(toDoListService.getList(id));
		}
		
		@CrossOrigin
		@PostMapping
		public ResponseEntity<ToDoList> createList(@RequestBody ToDoList toDoList){
			ToDoList newList = toDoListService.createList(toDoList);
			
			
			return ResponseEntity.status(HttpStatus.CREATED).body(newList);
		}
		
		
		@PutMapping("/{id}")
		public ResponseEntity<ToDoList> attList(@PathVariable(name = "id" )  Long id ,@RequestBody ToDoList toDoList){

			return ResponseEntity.ok(toDoListService.att(id, toDoList));
		}
		
		@CrossOrigin
		@DeleteMapping("/{id}")
		public ResponseEntity<ToDoList> deleteList(@PathVariable(name = "id" )  Long id){
			toDoListService.deleteList(id);

			return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
		}
		
		
	
	
}
