
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./projects.css"
import react, {useState , useEffect} from 'react';

function Projects(){
    let navigate = useNavigate();

    function Project1() {
    navigate('/Projects/Degree-Planner');
    }
    function Project2() {
        navigate('/Projects/Western-Maps');
    }

    const [transitionCoolDown,setTransitionCoolDown] = useState(2000);
    const [text,setText]= useState("Projects");
    const [canUse,setCanUse] = useState('true');

    
  
    const [currentHeightProject1,setCurrentHeightProject1] = useState(55);    const [currentWidthProject1,setCurrentWidthProject1] = useState(17);
    const [currentHeightProject2,setCurrentHeightProject2] = useState(0.8*55);const [currentWidthProject2,setCurrentWidthProject2] = useState(17*0.8);
    const [currentHeightProject3,setCurrentHeightProject3] = useState(0.8*55);const [currentWidthProject3,setCurrentWidthProject3] = useState(17*0.8);
    const [currentHeightProject4,setCurrentHeightProject4] = useState(0.8*55);const [currentWidthProject4,setCurrentWidthProject4] = useState(17*0.8);

    const[currentPositionProject1,setCurrentPositionProject1] = useState(0);
    const[currentPositionProject2,setCurrentPositionProject2] = useState(35);
    const[currentPositionProject3,setCurrentPositionProject3] = useState(-35);
    const[currentPositionProject4,setCurrentPositionProject4] = useState(-20);

    const[rotationCounter1,setRotationCounter1]= useState(0);
    const[rotationCounter2,setRotationCounter2]= useState(1);
    const[rotationCounter3,setRotationCounter3]= useState(-1);

    const[button1,setButton1] = useState(100);
    const[button2,setButton2] = useState(0);
    const[button3,setButton3] = useState(0);

    const transitionSpeed = 2000/1000;
    const[transitionSpeed1,setTransitionSpeed1] = useState(transitionSpeed);
    const[transitionSpeed2,setTransitionSpeed2] = useState(transitionSpeed);
    const[transitionSpeed3,setTransitionSpeed3] = useState(transitionSpeed);

    const[opacity1,setOpacity1] = useState(100);
    const[opacity2,setOpacity2] = useState(100);
    const[opacity3,setOpacity3] = useState(100);





    const  addValue = (tempDirection ='',tempValue =0) =>{
        setText(tempDirection.toString()+tempValue.toString());
    };




    // right button 

    const goingRight = () => {

        if (canUse  == 'true'){

            setCanUse('false');
            setRotationCounter1(rotationCounter1 => {
                const updatedValue = rotationCounter1+1;
                setCurrentPositionProject1(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject1(55);
                    setCurrentWidthProject1(17);
                    setButton1(100);
                    //setOpacity1(100);
                }
                else if(updatedValue == 2){
                    
                    setTransitionSpeed1(transitionSpeed/5);
                    setCurrentPositionProject1(35*2);
                    setOpacity1(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject1(35*-2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject1(35*-1);
                        setOpacity1(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed1(transitionSpeed);
                    },2000);
                    return -1;

                }
                else{
                    setCurrentHeightProject1(0.8*55);
                    setCurrentWidthProject1(0.8*17);
                    setButton1(0)
                }
               
                return updatedValue;
            });
            setRotationCounter2(rotationCounter2 => {
                const updatedValue = rotationCounter2+1;
                setCurrentPositionProject2(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject2(55);
                    setCurrentWidthProject2(17);
                    setButton2(100);
                }
                else if(updatedValue == 2){
                    setTransitionSpeed2(transitionSpeed/5);
                    setCurrentPositionProject2(35*2);
                    setOpacity2(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject2(35*-2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject2(35*-1);
                        setOpacity2(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed2(transitionSpeed);
                    },2000);
                    return -1;

                }
                else{
                    setCurrentHeightProject2(0.8*55);
                    setCurrentWidthProject2(0.8*17);
                    setButton2(0);
                }
                return updatedValue;
            });
            setRotationCounter3(rotationCounter3 => {
                const updatedValue = rotationCounter3+1;
                setCurrentPositionProject3(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject3(55);
                    setCurrentWidthProject3(17);
                    setButton3(100);
                }
                else if(updatedValue == 2){
                    setTransitionSpeed3(transitionSpeed/5);
                    setCurrentPositionProject3(35*2);
                    setOpacity3(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject3(35*-2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject3(35*-1);
                        setOpacity3(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed3(transitionSpeed);
                    },2000);
                    return -1;

                }
                else{
                    setCurrentHeightProject3(0.8*55);
                    setCurrentWidthProject3(0.8*17);
                    setButton3(0);
                }

                /*const timeOut= setTimeout(()  => {
                    setCurrentPositionProject3(-35);
                 }, 2000);*/
                return updatedValue;
            });

            const timeOut= setTimeout(()  => {
                    setCanUse('true');
            }, transitionCoolDown);
            return () => {
                clearTimeout(timeOut)};
        }
    };


    // left button 
    const goingLeft = () => {

        if (canUse  == 'true'){
            setCanUse('false');
            setRotationCounter1(rotationCounter1 => {
                const updatedValue = rotationCounter1-1;
                setCurrentPositionProject1(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject1(55);
                    setCurrentWidthProject1(17);
                    setButton1(100);
                }
                else if(updatedValue == -2){

                    setTransitionSpeed1(transitionSpeed/5);
                    setCurrentPositionProject1(35*-2);
                    setOpacity1(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject1(35*2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject1(35*1);
                        setOpacity1(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed1(transitionSpeed);
                    },2000);
                    return 1;

                }
                else{
                    setCurrentHeightProject1(0.8*55);
                    setCurrentWidthProject1(0.8*17);
                    setButton1(0)
                }
                return updatedValue;
            });
            setRotationCounter2(rotationCounter2 => {
                const updatedValue = rotationCounter2-1;
                setCurrentPositionProject2(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject2(55);
                    setCurrentWidthProject2(17);
                    setButton2(100);
                }
                else if(updatedValue == -2){

                    setTransitionSpeed2(transitionSpeed/5);
                    setCurrentPositionProject2(35*-2);
                    setOpacity2(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject2(35*2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject2(35*1);
                        setOpacity2(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed2(transitionSpeed);
                    },2000);
                    return 1;

                }
                else{
                    setCurrentHeightProject2(0.8*55);
                    setCurrentWidthProject2(0.8*17);
                    setButton2(0);
                }
                return updatedValue;
            });
            setRotationCounter3(rotationCounter3 => {
                const updatedValue = rotationCounter3-1;
                setCurrentPositionProject3(35*updatedValue);
                if(updatedValue == 0){
                    setCurrentHeightProject3(55);
                    setCurrentWidthProject3(17);
                    setButton3(100);
                }
                else if(updatedValue == -2){

                    setTransitionSpeed3(transitionSpeed/5);
                    setCurrentPositionProject3(35*-2);
                    setOpacity3(0);
                    const timeOut1= setTimeout(()  => {
                        setCurrentPositionProject3(35*2);
                     }, (1000*transitionSpeed)/5);
                     const timeOut2= setTimeout(()  => {
                        setCurrentPositionProject3(35*1);
                        setOpacity3(100);
                     }, (1000*2*transitionSpeed)/5);

                    const timeout3 = setTimeout( () =>{
                        setTransitionSpeed3(transitionSpeed);
                    },2000);
                    return 1;

                }
                else{
                    setCurrentHeightProject3(0.8*55);
                    setCurrentWidthProject3(0.8*17);
                    setButton3(0);
                }
                return updatedValue;
            });

            const timeOut= setTimeout(()  => {
                    setCanUse('true');
            }, transitionCoolDown);
            return () => {
                clearTimeout(timeOut)};
        }
    };


    
    return <div className="topSec">
        <div className="projectSecTitle" id="projectTitle">{text}</div>
        <div className="projectsContainer" style={{transform:'translateX( calc(-50% + '+currentPositionProject1.toString()+'vw))' ,left:"50%",
        height: currentHeightProject1.toString()+'%',
        width: currentWidthProject1.toString()+'%',
        transition: transitionSpeed1.toString()+"s",
        opacity:opacity1.toString()+"%"
        }} id ="project1">
        <div className="projectsContainerImage">Degree Planner</div><a className="projectsContainerButton" style={{opacity:button1.toString()+"%"}} onClick={Project1}>Learn More</a></div>

        <div className="projectsContainer" style={{ transform:'translateX( calc(-50% + '+currentPositionProject2.toString()+'vw))' ,
        height: currentHeightProject2.toString()+'%',
        width: currentWidthProject2.toString()+'%',
        transition: transitionSpeed2.toString()+"s",
        opacity:opacity2.toString()+"%"

        }}  id ="project2"><div className="projectsContainerImage" style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/src/java.JPG\")"}}>
               Western Maps
            </div><a className="projectsContainerButton" style={{opacity:button2.toString()+"%"} } onClick={Project2}>Learn More</a></div>
        
        <div className="projectsContainer" style={{ transform:'translateX( calc(-50% + '+currentPositionProject3.toString()+'vw))' ,
            height: currentHeightProject3.toString()+'%',
            width: currentWidthProject3.toString()+'%',
            transition: transitionSpeed3.toString()+"s",
            opacity:opacity3.toString()+"%"
    
        }}  id ="project3">
            <div className="projectsContainerImage" style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/src/.JPG\")"}}>
               
            </div><a className="projectsContainerButton" style={{opacity:button3.toString()+"%"}} onClick={Project1}>Learn More</a></div>

        <div className="projectsContainer" style={{left: currentPositionProject4.toString()+"%", height: currentHeightProject4.toString()+'%',
            width: currentWidthProject4.toString()+'%'
    
        }}  id ="project4"></div>

        <button className="projectsButton" onClick={goingLeft}>&lt;</button>
        <button className="projectsButton" style={{left:"90%"}} onClick={goingRight}>&gt;</button>
    </div>
}

export default Projects;