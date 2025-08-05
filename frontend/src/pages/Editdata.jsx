
import { useParams } from "react-router-dom";
const Editdata=()=>{
    const {id}=useParams();
    return(
        <>
        <h3>Edit Data!!! {id}</h3>
        </>
    )
}
export default Editdata;