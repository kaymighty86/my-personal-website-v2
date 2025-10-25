import { useEffect } from "react";

export default function Page({children}){
    //React Router doesn't reset the scroll bar when you change paths so i'm scrolling programatically to the top once a page loads
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return (
        <>{children}</>
    );
}