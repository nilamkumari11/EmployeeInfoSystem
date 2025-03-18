package com.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
	//java persistence API
	//hybernate -> writes the query in sql 
}