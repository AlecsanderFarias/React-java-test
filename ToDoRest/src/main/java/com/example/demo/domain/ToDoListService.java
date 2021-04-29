package com.example.demo.domain;


import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.repository.ToDoListRepository;
import com.example.demo.domain.exception.EntidadeNaoEncontradoException;
import com.example.demo.domain.model.ToDoList;
import com.example.demo.domain.model.Action;





@Service
public class ToDoListService {

	
	private ToDoListRepository toDoListRepository;
	

	
	
	@Autowired
	public ToDoListService(ToDoListRepository toDoListRepository) {
		this.toDoListRepository = toDoListRepository;
	}

	
	//GET
	public List<ToDoList> list(){
		return toDoListRepository.findAll();
	}
	
	//GET
	public ToDoList getList(Long id) {
		return findOrFail(id);
	}
	
	private ToDoList findOrFail(Long id) {
		return toDoListRepository.findById(id).orElseThrow(() -> new EntidadeNaoEncontradoException("Lista não localizada"));
	}
	
	
	//POST
	public ToDoList createList(ToDoList toDoList) {
		
		toDoList.getActions().forEach(a -> a.setList(toDoList));
			
		return toDoListRepository.save(toDoList);
	}
	
	//PUT
	public ToDoList att(Long Id,ToDoList todoList ) {
		ToDoList savedList = findOrFail(Id);
		
		savedList.getActions().clear();
		savedList.getActions().addAll(todoList.getActions());
		
		
		BeanUtils.copyProperties(todoList, savedList,"id","actions");
		
		
		return toDoListRepository.save(savedList);		
	}
	
	//DELETE
	public void deleteList(Long Id) {
		
		toDoListRepository.deleteById(Id);
		
		return ;	
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
