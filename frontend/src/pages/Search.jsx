

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Search=()=>{
    return(
        <>
         <h3 className="h33">Search Data page!!!</h3>
        <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
     </Form.Group>
     <Button variant="primary" type="submit" onClick={handleSubmit}>
             Submit
           </Button>
         </Form>
        </>
    )
}
export default Search;