
const page = ({params}) => {
    return (
        <div>
            <h1>Product Information</h1> 
            <br/>
           <h1>{params.id}</h1> 
        </div>
    );
};

export default page;