import { StarBackground } from "../compnents/StarBackground";
import { ThemeToggle } from "../compnents/ThemeToggle";
import { Navbar } from "../compnents/Navbar";
import { HeroSection } from "../compnents/HeroSection";
import { AboutSection } from "../compnents/AboutSection";
import {SKillsSection} from "../compnents/SkillsSection";
import {ProjectSection} from "../compnents/ProjectSection";
import { ContactSection } from "../compnents/ContactSection";
import {Certificate} from "../compnents/Certificate";
import {Experience} from "../compnents/Experience";

export const Home=()=>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle/>

        {/*Background effects*/}
        <StarBackground/>

        {/*Navbar*/}
        <Navbar/>


        {/*Main content*/}
        <main>
            <HeroSection/>
            <AboutSection/>
            <Experience/>
            <SKillsSection/>
            <ProjectSection/>
            <Certificate/>
            <ContactSection/>



        </main>

        {/*Footer*/}








    </div>
    );
};