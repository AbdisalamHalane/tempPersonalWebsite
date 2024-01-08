import "./index.css";
import "./projects.css"
import react, {useState , useEffect} from 'react';

class ProjectDisplay{

    private currOpacity: number = 0;
    private currPosition: number = 0;
    private title: string ="";

    public constructor(title: string){
        this.currOpacity = 100;
        this.currPosition = 50;
        this.title = title;
    }

    public changeOpacity(tempOpacity: number){
        this.currOpacity = tempOpacity;
    }

    public changePosition(tempPosition: number){
        this.currPosition = tempPosition;
    }

    public getPosition(): number{
        return this.currPosition;
    }
    
    public getOpacity(): number{
        return this.currOpacity;
    }

}

export default ProjectDisplay;