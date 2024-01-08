
import "./index.css";
import { NavLink as Link ,useNavigate} from "react-router-dom";
import styled from "styled-components";

function Navbar(){
    //JSX: Javascript XML
    const name ='Name';
    let navigate = useNavigate();

    function Projects() {
    navigate('/Projects/Degree-Planner');
    }
    function Home() {
        navigate('/');
    }
    return <>
        <div className="navBar"> <div className="titleText"onClick={Home} >Abdisalam Halane</div>
            <div className="navBarOption" onClick={Projects}>Projects</div>
            <div className="navBarOption" style={{left: '69.19%'}}>Contact</div>
         </div>
    </>
}

export default Navbar;