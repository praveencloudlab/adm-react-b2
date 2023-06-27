import {useState} from 'react';

const Greeting = (props) => {

    const[bgcolor,setColor]=useState('');


     function test(e){
        console.log(e.target.value);
        setColor(e.target.value);
     }

    let renderColours=()=>{
        return props.myColours.map(element => {
           return(
            <>
               {element} -  <input name='mycolor' onClick={(e)=>test(e)} type='radio' value={element}/>
            </>
           )
        });
    }

    return (
        <div>
            <h1>Greeting Component</h1>
            <hr/>
            {props.msg}

            <br/><br/>
            {renderColours()}
            <hr/>
           

        </div>
    );
};

export default Greeting;