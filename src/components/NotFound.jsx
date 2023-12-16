import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NotFound() {
    
  const navigate = useNavigate();

 
  
    useEffect(() => {
  // Display the alert when the component mounts
  window.alert("The Page is not yet developed");

  // Redirect to the EmployeeList page after the alert is dismissed
  navigate('/');
});

  return (
    <div>
      <h1 className='h1'>Developing</h1>
     
     
     
    </div>
  );
}

export default NotFound;
