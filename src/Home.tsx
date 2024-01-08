
import "./index.css";
import React, { useState,useEffect,useRef} from 'react';
import Projects from "./Projects"; 
import Navbar from "./NavBar"; 
import TopSec from "./TopSec"; 



function Home(){

    return <>
        <div><TopSec/><Projects/><Navbar />
        </div>
    </>
}

export default Home;