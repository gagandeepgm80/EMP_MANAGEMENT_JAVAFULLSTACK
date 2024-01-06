
import { useEffect, useState } from 'react';
import employeeService from '../services/employee.service';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
function AddEmployee() {
  var [name, setName] = useState('');
  var [location, setLocation] = useState('');
  var [department, setDepartment] = useState('');
  var  navigate = useNavigate();
const {id} = useParams();

const saveEmployee = (e) => {
  e.preventDefault();
  const employee = { name, location, department, id};
     if(id){
      employeeService.update(employee)
      .then(response =>{
        console.log("Data Updated Successfully",response.data)
        navigate('/')
      })
      .catch(error=>{
        console.log("Something Went Wrong",error)
      })
     }
   else{
    employeeService.create(employee)
    .then(response =>{
      console.log('Data Added Successfully',response.data);
      navigate('/')
    })
    .catch(error=>{
      console.log("Something went wrong",error)
    })
   }

  } 
       useEffect(()=>{
        if(id){
          employeeService.get(id)
          .then(employee=>{
            setName(employee.data.name);
            setLocation(employee.data.location);
            setDepartment(employee.data.department);
          })
          .catch(error=>{
            console.log("Something went Wrong", error)
          })
        }
       },[])
 
  return (
    <div className='container'>

        <h1>Add New Employee</h1>
        <hr/>
        <form>
          <div className='form-group'>
        <label>Enter Employee Name :</label>
        <input type='text' value={name} onChange={ (e) => setName(e.target.value)}/>
        <label>Enter  Location :</label>
        <input type='text' value={location} onChange={(e) =>setLocation(e.target.value)}/>
        <label>Enter Department :</label>
        <input type='text' value={department} onChange={(e) =>setDepartment(e.target.value)}/>
        </div>
        <button onClick={(e) =>saveEmployee(e)} className='btn btn-primary'>Save</button>
        </form>
        <Link to="/">Back to List</Link>
    </div>
  )
}

export default AddEmployee