import "./projects.css"
import react, {useState , useEffect} from 'react';
import ProjectDisplay from "./ProjectsClass";

function ProjectSelec(){
    
    const project1 = new ProjectDisplay("Degree Planner");
    const project2 = new ProjectDisplay("Western Maps");

    const [project1Opacity, setProject1Opacity] = useState(100);
    const [project2Opacity, setProject2Opacity] = useState(100);

    const [project1Position, setProject1Position] = useState(50);
    const [project2Position, setProject2Position] = useState(50);

    project2.changePosition(-50);
    project2.changeOpacity(0);





    return <>
        <div className="projectsBackground">
            <div id="project1Display" className="projectsDisplay" style={{left:project1.getPosition().toString()+"%"}}>
                < div className="projectTitle">Degree Planner</div>
                <div className="projectsDescription">This project focuses on Many things including the following: C++</div>
            </div>
        </div>
    </>
}

export default ProjectSelec;