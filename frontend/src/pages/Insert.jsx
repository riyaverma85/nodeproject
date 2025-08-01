

const Insert=()=>{
    return(
        <>
         <h3 className="h33"> Insert Student Record page!!!</h3>
        <form action="/save" method="post" id="form">
        Enter Name: <input type="text" name="name"/><br/><br/>
        Enter Subject: <input type="text" name="sub"/><br/><br/>
        Enter City: <input type="text" name="city"/><br/><br/>
        Enter Fees: <input type="text" name="fees"/><br/><br/>
        <button>Save</button>
    </form>
        </>
    )
}
export default Insert;