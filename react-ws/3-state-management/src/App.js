
import {useState} from 'react';

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
        <tr className='table-success'>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
        </tr>
       
      )
    })
  }

  
    const[num,setNum]=useState(1)
    const[even,setEven]=useState(0)
    const[odd,setOdd]=useState(1)
  //let num=1;

  function test(){
   // num=num+1;
   setNum(num+1);
    console.log(num);
  }

  return (
    <div className='container mt-5' >
      <h1 className='text-primary'>State Management</h1>
      <hr/>

      <ul>
      {renderCities()}

      </ul>


      <hr/>

      <table className='table' >
        
          <thead>
            <tr className='bg-info'>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {renderEmployees()}
          </tbody>
      
      </table>
      
      <br/><br/>

      <button onClick={test}>+</button>
      <button onClick={()=>setNum(num-1)}>-</button> <br/> <br/>
    <h1>Counter: {num}</h1> 

    <hr/>
    <button onClick={()=>setEven(even+2)}>Even</button>
    <button onClick={()=>setOdd(odd+2)}>Odd</button>

    <hr/>
    <h1>EVEN:: {even}</h1>
    <h1>ODD:: {odd}</h1>
     
     <hr/>
     <select>
      <option>Benz</option>
      <option>BMW</option>
      <option>Hyundai</option>
      <option>Honda</option>
      <option>Maruthi</option>
      <option>Kia</option>
      <option>Tata</option>
      <option>Toyota</option>
      <option>MG</option>
     </select>
     <hr/>
     <img src="" border="1"></img>

    </div>
  );
};

export default App;