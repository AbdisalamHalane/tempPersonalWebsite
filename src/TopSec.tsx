
import "./index.css";
import "./project1.jpg";
import React, { useState,useEffect,useRef} from 'react';
import Projects from "./Projects"; 
import Navbar from "./NavBar"; 



function TopSec(){
    //JSX: Javascript XML




    // push buttons

    const handleProjectClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        
    }


    //    scroll handlers  a
    const [scrollPosition, setScrollPosition]= useState(1);
    const [scrollPoisiton2, setScrollPosition2] = useState(0.3);
    const [scrollPoisiton3, setScrollPosition3] = useState(0.7);


    const handleScroll = () =>{

        // opacity changer 
        let tempOpac = 1-window.scrollY*0.0022;

        if (tempOpac >0){
            setScrollPosition(tempOpac);
            setScrollPosition2(tempOpac*0.3);
            setScrollPosition3(tempOpac*0.7);
        }
        else{
            setScrollPosition(0);
            setScrollPosition2(0)
        }
    };

    useEffect (() => {
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    return <div className="topSec">

    <div className="topSecText"><h1 style={{fontSize:'4vw',opacity:scrollPosition.toString()}}>I am Abdisalam</h1></div>
    <div className="topSecText" style={{left:'88.5%', color:'#c39521'}}><h1 style={{fontSize:'4vw',opacity:scrollPosition.toString()}}>Halane</h1></div>
    <div className="topSecText"><h1 style={{fontSize: '2vw', left: '57%', top: '15%', position: 'absolute',opacity:scrollPoisiton2.toString()}}>A programmer</h1></div>

    <button  className="optionButtons" style={{opacity:scrollPosition.toString()}} onClick={handleProjectClick}>Projects</button>
    <button  className="optionButtons" style={{top:'60%',opacity:scrollPosition.toString()}}>Contact</button>

    <div className="aboutContainers" style={{opacity:scrollPosition.toString(),left:'4%',top:'19%', backgroundColor:"#c39521"}}></div>
    <div className="aboutContainers" style={{opacity:scrollPosition.toString(),left:'19%',top:'29%',backgroundColor:"#c39521"}}></div>
    <div className="aboutContainers" style={{opacity:scrollPoisiton3.toString()}}> Languages and Libraries Covered
        <div className="aboutContainerTextElements">C++ , C# , C</div>
        <div className="aboutContainerTextElements">C++ SFML,Wt</div>
        <div className="aboutContainerTextElements">Java , Swing</div>
        <div className="aboutContainerTextElements">Python , Django</div>
        <div className="aboutContainerTextElements">HTML5 , CSS</div>
        <div className="aboutContainerTextElements">JS , React , JQuery</div>
        <div className="aboutContainerTextElements">SQL</div>
        <div className="aboutContainerTextElements">x86-Assembly</div>
        <div className="aboutContainerTextElements">ARM Assembly</div>
        <div className="aboutContainerTextElements">PHP</div></div>
    <div className="aboutContainers" style={{left:'20vw',top:"30vh",opacity:scrollPoisiton3.toString()}}>Math Topics Covered
        <div className="aboutContainerTextElements">Calculus I-IV</div>
        <div className="aboutContainerTextElements">Differential Calc</div>
        <div className="aboutContainerTextElements">Linear Algebra I-II</div>
        <div className="aboutContainerTextElements">Real Analysis I-II </div>
        <div className="aboutContainerTextElements">Complex Analysis</div>
        <div className="aboutContainerTextElements">Discrete Math I-II</div>
        <div className="aboutContainerTextElements">Topolgy</div>
        <div className="aboutContainerTextElements">Group Theory</div>
        <div className="aboutContainerTextElements">Abstract Algebra</div>
    
    </div>
    </div>
}

export default TopSec;
    