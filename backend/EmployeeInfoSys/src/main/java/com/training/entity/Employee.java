package com.training.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="employees") // create table
public class Employee {
	
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  
  @Column(name="emp_id") // database
  private String empId; // java 
  
  @Column(name="first_name")
  private String firstName;
  
  @Column(name="last_name")
  private String lastName;
  
  @Column(name="email_id")
  private String emailId;
  
  
  
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getEmpId() {
	return empId;
}
public void setEmpId(String empId) {
	this.empId = empId;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}

public Employee() {

}
public Employee(String empId, String firstName, String lastName, String emailId) {
	super();
	this.empId = empId;
	this.firstName = firstName;
	this.lastName = lastName;
	this.emailId = emailId;
}
  
}
