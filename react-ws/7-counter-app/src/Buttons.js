import { useState } from "react";
const Buttons = ({btnLabel,parentFun}) => {

    //let hitCount=0
    const[hitCount,setHitCount] = useState(0);
    function countHits(){
        setHitCount(hitCount+1);
        parentFun(btnLabel);
    }
    return (
        <div className='card card-body'>
            
            <span className='text-center'><h4>Count: {hitCount}</h4></span>
            <hr/>
            <button className="btn btn-success" onClick={()=>countHits()}><h4>{btnLabel}</h4></button>
        </div>
    );
};

export default Buttons;