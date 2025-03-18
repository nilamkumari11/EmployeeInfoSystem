// import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getEmployeeById} from './api/employee-api';
import { useEffect } from "react";
import { updateEmployee } from "./api/employee-api";

const UpdateEmp = () => {
  const { id } = useParams();  // Get the 'id' parameter from the URL
  const navigate = useNavigate();

  // Initialize state variables
  const [empId, setEmpId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch employee data if the id exists (i.e., edit mode)
      getEmployeeById(id)
        .then((response) => {
          const { empId, firstName, lastName, emailId } = response.data;
          setEmpId(empId);
          setFirstName(firstName);
          setLastName(lastName);
          setEmailId(emailId);
          setLoading(false);
        })
        .catch((err) => {
          setError('Error fetching employee data');
          setLoading(false);
        });
    } else {
      setLoading(false); // If there's no 'id', this is for adding a new employee
    }
  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    const employeeData = { empId, firstName, lastName, emailId };

    if(id){
      updateEmployee(employeeData, id).then((response) =>{
           console.log(response.data);
           navigate('/employees');
       })
    }
 

    console.log(" Emp object"+ JSON.stringify(employeeData ));



  }
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="card">
        
          <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
                <label className="form-label">Emp Id</label>
                <input
                  type="text"
                  placeholder="Enter Employee Id"
                  name="empId"
                  value={empId}
                  className="form-control"
                  onChange={(e) => setEmpId(e.target.value)}
                  disabled={id} // Disable empId input when editing an employee
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Emp Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Emp LastName</label>
                <input
                  type="text"
                  placeholder="Enter Employee LastName"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Emp Email</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="emailId"
                  value={emailId}
                  className="form-control"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                {id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default UpdateEmp
