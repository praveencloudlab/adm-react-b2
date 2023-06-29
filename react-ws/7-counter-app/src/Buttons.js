import { useState,useEffect } from "react";
const Buttons = ({btnLabel,parentFun,resetCount}) => {

    //let hitCount=0
    const[hitCount,setHitCount] = useState(0);
    function countHits(){
        setHitCount(hitCount+1);
        parentFun(btnLabel);
    }


    useEffect(()=>{
        setHitCount(0);
    },[resetCount])


    return (
        <div className='card card-body'>
            
            <span className='text-center'><h4>Count: {hitCount}</h4></span>
            <hr/>
            <button className={btnLabel>0?'btn btn-success':'btn btn-warning'} onClick={()=>countHits()}><h4>{btnLabel}</h4></button>
        </div>
    );
};

export default Buttons;