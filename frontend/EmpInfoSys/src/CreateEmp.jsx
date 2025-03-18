// import React from 'react'
import { useState } from 'react';
import { createEmployee } from './api/employee-api';
import { useNavigate } from 'react-router-dom';

const CreateEmp = () => {
  const [empId, setEmpId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');


  const navigator = useNavigate();

  function saveEmployee(e){
    e.preventDefault();
    const employee = {empId, firstName, lastName, emailId}
    console.log(employee);

    createEmployee(employee).then((response) =>{
       console.log(response.data);
       navigator("/read");
   })
 }

  return (
    <div><div className="container">
    <div className="row">
      <div className="card">
        <h2 className="text-center">Add Employee</h2>
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Emp Id</label>
              <input
                type="text"
                placeholder="Enter Employee Id"
                name="empId"
                value={empId}
                className="form-control"
                onChange={(e)=>  setEmpId(e.target.value)}
              ></input>
            </div>

            <div className="form-group mb-2">
              <label className="form-label">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="empName"
                value={firstName}
                className="form-control"
                onChange={(e)=>  setFirstName(e.target.value)}
              ></input>
            </div>

            <div className="form-group mb-2">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                name="empmail"
                value={lastName}
                className="form-control"
                onChange={(e) =>setLastName(e.target.value)  }
              ></input>
            </div>

            <div className="form-group mb-2">
              <label className="form-label">Email Id</label>
              <input
                type="text"
                placeholder="Enter Employee Email"
                name="empPhone"
                value={emailId}
                className="form-control"
                onChange={(e) => setEmailId(e.target.value) }
              ></input>
            </div>
            <button className="btn btn-success" onClick={saveEmployee}>Submit</button>  
          </form>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default CreateEmp