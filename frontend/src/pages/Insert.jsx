import { useState } from "react";
import axios from "axios";
import BackendURl from "../utils/BackendURL";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}));
        console.log(input)
    }
    const handleSubmit=async()=>{
        let api=`${BackendURl}students/save`;
        const response=await axios.post(api,input);
        console.log(response.data);
        alert("data saved!!")
}
    return(
        <>
         <h3 className="h33"> Insert Student Record page!!!</h3>
        {/* <form id="form">
        Enter Name: <input type="text" name="name" onChange={handleInput}/><br/><br/>
        Enter Rollno: <input type="text" name="rollno" onChange={handleInput}/><br/><br/>
        Enter City: <input type="text" name="city" onChange={handleInput}/><br/><br/>
        Enter Fees: <input type="text" name="fees" onChange={handleInput}/><br/><br/>
        <button onClick={handleSubmit}>Save</button>
    </form> */}

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Insert;