import React from 'react';

const App = () => {

  let cities=['New York', 'San Francisco','Chicago','Delaware']
  let employees=[{id:1,name:'James',age:76},{id:2,name:'Richards',age:87}]

  function renderCities(){
    return cities.map(city=>{
      return(
        <li>{city}</li>
      )
    })
  }

  function renderEmployees(){
    return employees.map(emp=>{
      return(
        <tr>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
        </tr>
       
      )
    })
  }

  return (
    <div className='container'>
      <h1>State Management</h1>
      <hr/>

      <ul>
      {renderCities()}

      </ul>

      <hr/>

      <table className='table'>
        
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {renderEmployees()}
          </tbody>
      
      </table>
      
      
     

    </div>
  );
};

export default App;