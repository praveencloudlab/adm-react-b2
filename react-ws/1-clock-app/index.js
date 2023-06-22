let d1=document.getElementById("indianClock");
let d2=document.getElementById("dubaiClock");
let d3=document.getElementById("americanClock");

let d4=document.getElementById("indianClockV1");
let d5=document.getElementById("dubaiClockV1");
let d6=document.getElementById("americanClockV1");


function jsClock(props){
let time=new Date().toLocaleTimeString("en-US",{timeZone:props});
var template=`
        <div class='card'>
            <div class='card-header'><h6>${props}</h6></div>
            <div class='card-body'>
                <h4> ${time} </h4>
            </div>
        </div>
        `
    return template;
}

function reactClock(props){
    let time=new Date().toLocaleTimeString("en-US",{timeZone:props});
    var template=
            <div class='card'>
                <div class='card-header'><h6>{props}</h6></div>
                <div class='card-body'>
                    <h4> {time} </h4>
                </div>
            </div>
            
        return template;
    }

setInterval(() => {
    d1.innerHTML=jsClock('asia/kolkata');
    d2.innerHTML=jsClock('asia/dubai');
    d3.innerHTML=jsClock('america/new_york');
//----------------------------------------------------------------

    ReactDOM.render(reactClock('asia/kolkata'),d4)
    ReactDOM.render(reactClock('asia/dubai'),d5) 
    ReactDOM.render(reactClock('america/new_york'),d6)   
   
}, 1000);


