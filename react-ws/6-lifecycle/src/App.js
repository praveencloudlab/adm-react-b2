import {useState,useEffect} from 'react';
import Box from './Box';

const App = () => {

  const[counter,setCounter]=useState(1);
  const[even,setEven]=useState(2);

  useEffect(()=>{
    console.log("useEffect::with array:: once in life cycle");
  },[])

  useEffect(()=>{
    console.log("useEffect::with array:: counter update");
  },[counter])

  useEffect(()=>{
    console.log("useEffect::with array:: even update");
  },[even])

  useEffect(()=>{
    console.log("useEffect::with array:: counter or evenn update");
  },[even,counter])

  useEffect(()=>{
   console.log(">> useEffect:: without array: any state change"); 
  })

  return (
    <div className='container'>
        <h1>Licy cycle</h1><hr/>
       <button onClick={()=>setCounter(counter+1)}>Increment</button>
       <button onClick={()=>setEven(even+2)}>Even Increment</button>

       <br/>
       <h1>counter: {counter}</h1>
       <h1>Even counter: {even}</h1>

       <hr/>

       {counter<=10?<Box/>:null}     
    </div>
  
   
  );
};

export default App;