
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackendURl from "../utils/BackendURL";
const Editdata=()=>{
    const {id}=useParams();
    const[mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`${BackendURl}students/edit/${id}`;
        const response=await get(api);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h3>Edit Data!!! {id}</h3>
        </>
    )
}
export default Editdata;