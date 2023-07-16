import React from "react";
import { Link } from "react-router-dom"; 
import Header from "./Com-comp/Header";

const Help = () => {
    return ( 
        <>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul> */}
        <Header />
        <h1>This is Help page.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus? Iste eum harum recusandae temporibus.</p>
        </>
     );
}

 
export default Help;