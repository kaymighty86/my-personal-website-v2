import NavigationSection from "../sections/NavigationSection";
import FooterSection from "../sections/FooterSection";
import { Outlet } from "react-router";

export default function RootPage(){
    return (
        <>
            <NavigationSection />
            <Outlet />
            <FooterSection />
        </>
    );
}