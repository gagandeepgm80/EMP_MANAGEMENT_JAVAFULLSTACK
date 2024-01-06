import './employeeList.css'
import { useEffect, useState } from "react";

import employeeService from '../services/employee.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
function EmployeeList () {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    init();
  }, [])

const init = () =>{
  employeeService.getAll()
    .then(response => {
      console.log('printing', response.data);
      setEmployees(response.data);
    })
    .catch(error =>{
      console.log('wrong',error);
    })
}

const handleDelete = (id, name) => {
  const isConfirm = window.confirm(`Are you sure you want to delete ${name} and ${id} ?`);
  if(isConfirm){
  employeeService
    .remove(id)
    .then((response) => {
      console.log('Employee deleted successfully', response.data);
      
      init();
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });

}
else{
  window.alert("Deletion cancelled by user");
}
};
  return (
    <div className="container">
    
      <h3 className='h3 '><u className='text-danger'>List Of Employees</u></h3>
     
    <div className="tab">
      <Link  to="/add" className='btn btn-primary mb-2'>Add Employee</Link>
      <table border="1" cellPadding={"10"} className="table table-bordered table-striped " >
        <thead className="thead-dark">
        <tr>
    <th>EmpId</th>
     <th>Name</th>
      <th>Locaiton</th>
       <th>Department</th>
       <th>Actions</th>

   </tr>
   </thead>
   <tbody>
      {
        employees.map(employee=>(
       
          <tr key ={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.location}</td>
            <td>{employee.department}</td>
            <td>
            <Link className='btn btn-info' to={`/employees/edit/${employee.id}`}>Update</Link>
                       
              <button className = 'btn btn-danger' onClick={(e)=>{handleDelete(employee.id, employee.name)}} >Delete</button>
            </td>
              
          
           
             
        

          
          </tr>
        
        ))
      }
      </tbody>
        </table>
    </div>
    </div>
  );
}

export default EmployeeList;
