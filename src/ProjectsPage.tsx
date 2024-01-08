import "./index.css";
import React, { useState,useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "./NavBar"; 
import ProjectSelec from "./ProjectsSelec";



function ProjectPage(){
    const { currentProject: initialProject } = useParams<{ currentProject?: string }>();
    const [currentProject, setCurrentProject] = useState(initialProject||"");
    let temp ="EMPTY";

    if (currentProject != "" ){
        temp = currentProject;
    }
    else{
        temp = "NO";
    }
    return <>
        <div>
           <ProjectSelec/> <Navbar/>
        </div>
    </>
}

export default ProjectPage;