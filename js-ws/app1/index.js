 "use strict"

/*
// named functions
f1();
function f1(){
    console.log(">> TEST::  Hello World. I am f1 function");
}


//f2(); //invalid
let f2=function(){
    console.log(">> TEST:: Hello World. I am f2 function");
}

f2();
*/


/*
function f1(x){
    console.log(x);
}

f1(43);
f1(42,76);
f1()
*/


/*


 function getFood(){
    console.log("no food");
}

function getFood(pay){
    console.log(".. in getFood function");
    if(arguments.length!=0){
    console.log('Biryani');
    }
    else{
        console.log("no food");
        // making payment
        //getFood();
    } 
 }
 getFood(); 

*/

// clousers

/*
function teach(){
    console.log("... teaching ..");
    // teach function must call lean function

    function learn(){
        console.log("... learning...");
    }
    //learn();
    return learn; // should return function name only
} // end of teach

let funObj=teach();
funObj()
funObj()
funObj()

*/


/*
function teach(){
    console.log("... teaching ..");
    function learn(){
        console.log("... learning..");
    }

    function task(){
        console.log("... doing task..");
    }
   
    return {learn,task}; // should return function name only
} 
*/



/*
let funObj=teach();
funObj.learn()
funObj.task()
*/


    let teach=()=>{ // es6 arrow functions
        console.log(">> teaching ");
        let learn=()=> console.log(">> learning");
        let task=()=> console.log(">> doing task...");
        return{task,learn}
    }

  let{learn,task}=teach(); // de-structuring in ES6
  learn();
  task()

  //------------

  let sum=(a,b)=>a+b;

  let result=sum(12,8);
  console.log(result);












