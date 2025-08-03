
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import BackendURl from '../utils/BackendURL';
import axios from 'axios';

const Display=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api=`${BackendURl}students/display`;
    const response=await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.name}</td>
        <td>{key.rollno}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })
    return(
        <>
         <h3 className="h33">Student Data display page!!!</h3>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>City</th>
          <th>Subject</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Display;