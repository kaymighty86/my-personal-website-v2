import Styles from "./NavigationSection.module.css";

import { useState } from "react";

import ActiveLink from "../UI/ActiveLink";
import ActiveLink_Router from "../UI/ActiveLink_Router";
import { TiPointOfInterest } from "react-icons/ti";
// import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { LuCross } from "react-icons/lu";

export default function NavigationSection(){
    const [navOpen, setNavOpen] = useState(false);

    function handleNavButtonClick(){
        navOpen? setNavOpen(false) : setNavOpen(true);
    }
    
    return (
        <>
            <button onClick={handleNavButtonClick} className={`${Styles.navButton}${navOpen? " "+Styles.navOpen: ""}`}>{!navOpen? <HiOutlineViewGrid/> : <LuCross />}</button>
            {navOpen && 
                <nav onClick={handleNavButtonClick} className={Styles.navigationSection}>
                    <ul>
                        <li><ActiveLink_Router to="/?section=landing" underline><TiPointOfInterest/> Home</ActiveLink_Router></li>
                        <li><ActiveLink href="#contact" underline><TiPointOfInterest/> Contact</ActiveLink></li>{/*this is using the normal active link element because section navigation is not possible in React Router*/}
                        <li><ActiveLink_Router to="projects" underline><TiPointOfInterest/> Work</ActiveLink_Router></li>
                        <li><ActiveLink_Router to="/?section=about" underline><TiPointOfInterest/> About</ActiveLink_Router></li>
                    </ul>
                </nav>
            }
        </>
    );
}