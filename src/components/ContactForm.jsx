import styles from "./ContactForm.module.css";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button";

import Card from "../components/UI/Card";

import { useActionState, useState } from "react";

export default function ContactForm(){
    const [formSubmitState, setFormSubmitState] = useState({
        message: undefined,
        isError: undefined
    });

    async function handleFormSubmit(prevFormData, formData){
        //BEGINNING SUBMISSION
        formData.append("access_key", "f695bdde-9541-4566-9fe9-d66d709cf208");

        formData.set("name",formData.get("name").trim());//trim any leading or trailing whitespaces in the name
        formData.set("message",formData.get("message").trim());//trim any leading or trailing whitespaces in the messgae
        
        try{
            const response = await fetch("https://api.web3forms.com/submit",{
                method: "POST",
                body: formData
            });

            //GOTTEN FEEDBACK
            if(!response.ok){
                setFormSubmitState({
                    message: "Unable to send your email at the moment 😦. Thirdparty mailing service may be down. Please try again later.",
                    isError: true
                });
                
                return Object.fromEntries(formData.entries());//if there is an error return the form data so that the form repopulates the person's message
            }
        }
        catch(error){
            setFormSubmitState({
                message: error.toString()+":: Unable to send your email at the moment 😦. Please try again later. If you're spamming, that may also be the cause.",
                isError: true
            });

            return Object.fromEntries(formData.entries());
        }
        

        setFormSubmitState({
            message: "Mail sent successfully! Its nice to hear from you 😃. You will get a response soon 😁.",
            isError: false
        });

        return;
    }

    const [formState, dispatchFormAction, isSubmitting] = useActionState(handleFormSubmit);

    return (
        <>
            {!isSubmitting && formSubmitState.message && 
            <p className={`${styles.formResponseMessage} ${formSubmitState.isError===true && styles.formResponseError} ${formSubmitState.isError===false && styles.formResponseSuccess}`}>
                {formSubmitState.message}
            </p>}
            {isSubmitting && <p className={`${styles.formResponseMessage}`}>Submitting your message...</p>}
            <form className={styles.contactForm} action={dispatchFormAction}>
                {!isSubmitting? <span>
                        <Input label={"Name"} type="text" name="name" defaultValue={formState && formState.name}  required placeholder="Your name (include your title if necessary)" disabled={isSubmitting}/>
                        <Input label={"Email"} type="email" name="email" defaultValue={formState && formState.email} required placeholder="Your email address" disabled={isSubmitting}/>
                        <TextArea label={"message"} name="message" defaultValue={formState && formState.message} required placeholder="Type your message 😃" disabled={isSubmitting}></TextArea>
                    </span>:
                    <span className={styles.formLoadingUISection}>
                        <MdOutgoingMail className={styles.loadingIcon}/>
                    </span>
                }                 
                <Button className={styles.submitFormBtn} disabled={isSubmitting}>
                    {!isSubmitting? <>Send <FaPaperPlane /></> : 
                    <>Sending...</>}
                </Button>
            </form>
        </>
    );
}