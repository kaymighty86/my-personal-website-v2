import styles from "./ContactForm.module.css";
import { FaPaperPlane } from "react-icons/fa";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";

export default function ContactForm(){
    return (
        <form className={styles.contactForm}>
            <Input label={"Name"} type="text" name="name" required placeholder="Your name (including your title if necessary)"/>
            <Input label={"Email"} type="email" name="email" required placeholder="Your email"/>
            <TextArea label={"message"} name="message" required placeholder="Hi, lets discuss about something 😃."></TextArea>
            <button type="submit">Send <FaPaperPlane /></button>
        </form>
    );
}