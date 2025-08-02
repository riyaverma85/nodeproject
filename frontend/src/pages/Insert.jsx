import { useState } from "react";
import axios from "axios";
import BackendURl from "../utils/BackendURL";
const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}));
        console.log(input)
    }
    const handleSubmit=async()=>{
        let api=`${BackendURl}/student/save`;
        const response=await axios.get(api);
        console.log(response.data);
}
    return(
        <>
         <h3 className="h33"> Insert Student Record page!!!</h3>
        <form action="/save" method="post" id="form">
        Enter Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
        Enter Rollno: <input type="text" name="roll" onChange={handleInput}/><br/><br/>
        Enter City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
        Enter Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Save</button>
    </form>
        </>
    )
}
export default Insert;