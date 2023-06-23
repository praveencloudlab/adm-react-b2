import Story from "./Story";
function Box(){
    return(
        <div>
            <h1>This is Box Component</h1>
            <button className="btn btn-primary">Click Here</button>
            <Story/>
        </div>
       

        
    )
}
export default Box;