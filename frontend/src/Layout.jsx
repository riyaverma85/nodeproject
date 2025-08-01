import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Topnav from "./components/Topnav";
const Layout=()=>{
    return(
        <>
        <Header/>
        <Topnav/>
         <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;