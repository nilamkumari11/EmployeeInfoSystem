import axios from 'axios';

const REST_API_POST_URL = "http://localhost:9081/api/storeemp";

export const getEmployeeApi = async()=>{
    const allempdata = await axios.get('http://localhost:9081/api/test');
    return allempdata;
}

export const createEmployee  = (employee) => axios.post(REST_API_POST_URL,employee);

export const getEmployeeById = (id) => axios.get('http://localhost:9081/api/employees/'+id);// API to get employee by ID

export const updateEmployee = (employee,id) => axios.put('http://localhost:9081/api/update-employee/'+id,employee);

export const deleteEmployee = (id) => axios.delete('http://localhost:9081/api/del-employee/'+id);