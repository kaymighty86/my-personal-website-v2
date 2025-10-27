import styles from "./Socials.module.css";
import ActiveLink from "./UI/ActiveLink";

import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Socials(){

    return (
        <ul className={styles.socials}>
            <li><ActiveLink href="mailto:simeonadeoye111@gmail.com" target="blank" showDefaultIcon><IoMail/></ActiveLink></li>
            <li><ActiveLink href="https://github.com/kaymighty86" target="blank" showDefaultIcon><FaGithub /></ActiveLink></li>
            <li><ActiveLink href="https://www.linkedin.com/in/simeon-adeoye-6a88a7121/" target="blank" showDefaultIcon><FaLinkedin /></ActiveLink></li>
            <li><ActiveLink href="https://codepen.io/Kay86X" target="blank" showDefaultIcon><FaCodepen /></ActiveLink></li>
        </ul>
    );
}