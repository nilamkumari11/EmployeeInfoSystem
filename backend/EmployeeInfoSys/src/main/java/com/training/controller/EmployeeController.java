package com.training.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.training.entity.Employee;
import com.training.service.EmployeeServices;

@CrossOrigin(origins = "http://localhost:5173") // react understand back end coming
@RestController
@RequestMapping("/api") //starting point
public class EmployeeController {
	@Autowired  // spring boot container (in built) will create object according to requirement -> Inversion of control
	EmployeeServices employeeService;
	
	@GetMapping("/test") // get data 
	public List<Employee> getMessage() {
		System.out.println(" I am in controller "); 
		
		List<Employee> listOfEmp = null;
	
        listOfEmp = employeeService.getAllEmployees();
       
        for(Employee employee : listOfEmp) {
        	System.out.println( " Emp Id "+ employee.getFirstName());
        }
		
	
		return listOfEmp;
	}
	
	// Create Employee Record
		@PostMapping("/storeemp") // store data
		public Employee createEmployee(@RequestBody Employee employee) { // capture data from postman 
			return employeeService.storeEmployee(employee);
		}
		
		// Update employee rest api	
		@PutMapping("/update-employee/{id}") 
		public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
			Employee emp = employeeService.updateEmployee(employeeDetails, id);
			return ResponseEntity.ok(emp);
		}

		//delete employee rest api  
				@DeleteMapping("/del-employee/{id}") 
				public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){			
					employeeService.deleteEmployee(id);			
					Map<String, Boolean> response = new HashMap<String, Boolean>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);			
				}
				
				@GetMapping("/employees/{id}")
				public Employee geEmpById(@PathVariable Long id) {

					System.out.println(" Emp Id " + id);

					return employeeService.getEmpById(id);
				}
}