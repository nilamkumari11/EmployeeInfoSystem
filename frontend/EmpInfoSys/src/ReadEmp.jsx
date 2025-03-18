import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { deleteEmployee } from './api/employee-api';

import * as api from "./api/employee-api";


const ReadEmp = () => {
//variable initialization
  const [empData,setEmpData]=useState([]);
  const getData=async()=>{
    const empdata = await api.getEmployeeApi();
    //set data to empData
    setEmpData(empdata.data);
  };

  const navigator = useNavigate();
  // const {id} = useParams();

  //page load call api
  useEffect(()=>{
    //call
    getData();
  },[])
console.log('data should be:',empData);

function updateEmployee(id){
  navigator(`/edit-employee/${id}`);
}

function deleteEmployee(id){
  if(id){
       api.deleteEmployee(id).then((response) =>{
                console.log(response.data);
                navigator('/employees');
                getData();
            });
  }
}

  return (
    <div>
        <table>
	<thead>
	<tr className="table-headers">
    <th>emp ID</th>
    <th>first name</th>
    <th>last name</th>
    <th>email</th>
    <th>Action</th>
	</tr>
	</thead>
	<tbody>
    {empData.map((data, index)=>(
    <tr key={index}>
      <td>{data.empId}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.emailId}</td>
      <td>
          <button className="btn btn-info" onClick={() =>updateEmployee(data.id)}>Update</button>
          <button className="btn btn-danger ml-2" onClick={() => deleteEmployee(data.id)} // Delete employee
                >
                  Delete
         </button>
      </td>
    </tr>
    ))}
	</tbody>
</table>
    </div>
  )
}

export default ReadEmp