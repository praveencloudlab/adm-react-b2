import {useState} from 'react';
import Buttons from './Buttons';

const Counter = () => {
    const btnLabels=[5,10,15,20,-20,-15,-10,-5,30];
    const[totalHitsCount,setTotalHitsCount] =useState(0);

    function calculateTotalHitsCount(data) {
       setTotalHitsCount(data+totalHitsCount)
    }

    function renderButtons(){
        return btnLabels.map((btnLabel,idx)=>{
            return(
                <div  key={idx} className="col-4 mt-3">
                <Buttons parentFun={calculateTotalHitsCount}  btnLabel={btnLabel}/>
                </div>
            )
        })
    }
    return (
        <div>

    
     
        <div className='card'>
            <div className='card-header'><h4>Counter APP</h4></div>
            <div className='card-body'>
            <div className='text-center'>
            <button className='btn btn-primary' >Reset All</button>
            </div>
           
                <div className='row'>
                {renderButtons()}
                </div>
            </div>
            <div className='card-footer text-center'>
                <h2>Total Hits Count: {totalHitsCount}</h2>
            </div>
        </div>
       
        </div>
      
    );
};

export default Counter;