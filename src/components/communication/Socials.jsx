import styles from "./Socials.module.css";

import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Socials(){

    return (
        <ul className={styles.socials}>
            <li><a href="#" target="blank"><IoMail/></a></li>
            <li><a href="#" target="blank"><FaGithub /></a></li>
            <li><a href="#" target="blank"><FaLinkedin /></a></li>
            <li><a href="#" target="blank"><FaCodepen /></a></li>
        </ul>
    );
}