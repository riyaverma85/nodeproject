import { useState } from "react";
import axios from "axios";
import BackendURl from "../utils/BackendURL";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify'; 

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}));
        console.log(input)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendURl}students/save`;
        const response=await axios.post(api,input);
        console.log(response.data);
        toast.success("data saved!!")
}
    return(
        <>
         <h3 className="h33"> Insert Student Record page!!!</h3>
        

    <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text"  name="fees" onChange={handleInput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default Insert;