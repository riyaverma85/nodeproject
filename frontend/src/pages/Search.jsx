import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackendURl from '../utils/BackendURL';
import axios from 'axios';
const Search=()=>{
    const [mydata,setMydata]=useState([]);
    const[rno,setRno]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
      let api=`${BackendURl}students/search`;
      const response=await axios.post(api,{rollno:rno});
      console,log(response.data);
      setMydata(response.data);
    }
    
    return(
        <>
         <h3 className="h33">Search Data page!!!</h3>
        <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
     </Form.Group>
     <Button variant="primary" type="submit" onClick={handleSubmit}>
             Search
           </Button>
         </Form>

         <Table striped bordered hover variant="dark">
               <thead>
                 <tr>
                   <th>Sno</th>
                   <th>Name</th>
                   <th>Rollno</th>
                   <th>City</th>
                   <th>Fees</th>
                 </tr>
               </thead>
               <tbody>
                  {mydata.length>=1 && mydata.map((key)=>{
                        return(
                            <>
                            <tr>
                                <td>{key.name}</td>
                                <td>{key.rollno}</td>
                                <td>{key.city}</td>
                                <td>{key.fees}</td>
                                
                            </tr>
                            </>
                        )
                  })}
               </tbody>
               </Table>
        </>
    )
}
export default Search;