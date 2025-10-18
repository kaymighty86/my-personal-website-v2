import styles from "./Socials.module.css";
import ActiveLink from "./UI/ActiveLink";

import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Socials(){

    return (
        <ul className={styles.socials}>
            <li><ActiveLink href="#" target="blank" className="showIcon"><IoMail/></ActiveLink></li>
            <li><ActiveLink href="#" target="blank" className="showIcon"><FaGithub /></ActiveLink></li>
            <li><ActiveLink href="#" target="blank" className="showIcon"><FaLinkedin /></ActiveLink></li>
            <li><ActiveLink href="#" target="blank" className="showIcon"><FaCodepen /></ActiveLink></li>
        </ul>
    );
}