import {cn} from "@/lib/utils";
import { useEffect,useState } from "react";
import { X, Menu } from "lucide-react"; 


const navItems=[
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Experience",href:"#exp"},
    {name:"Skills",href:"#skills"},
    {name:"Project",href:"#project"},
    {name:"Certifications",href:"#cert"},
    {name:"Contact",href:"#contact"},
]
    



export const Navbar=()=>{
    const [isScrolled,setIsScrolled]=useState(false);
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    useEffect(()=>{
        const handleScroll =()=>{
            setIsScrolled(window.scrollY>10);
        };
        
    

    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);


},[]);
    return <nav className={cn(
    "fixed w-full z-40 transition-all duration-300",
    isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5")}>
    <div className="container flex items-center justify-between">
    <a
       className="text-xl font-bold text-primary flex items-center"
       href="#hero"
    >
        <span className="relative z-10">
           
            <span className="text-glow">Sakshi Srivastava</span>{" "}
        </span>
    </a>


    {/*desktop */}

    <div className="hidden md:flex space-x-8">
        {navItems.map((item,key) => (
            <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
                {item.name}
            </a>
        ))}
    </div>

{/*mobile*/}

<button 
onClick={() => setIsMenuOpen((prev) => !prev)}
className="md:hidden z-[60] relative"
aria-label={isMenuOpen ? "Close Menu":"Open Menu"}
>
{isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
</button>
<div className={cn(
    "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
    "transition-all duration-300 md:hidden",
    isMenuOpen
    ? "opacity-100 pointer-events-auto translate-y-0"
    :"opacity-0 pointer-events-none -translate-y-full"
    )}>
<div className="flex flex-col items-center-space-y-8">
        {navItems.map((item,key) => (
            <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={()=>setIsMenuOpen(false)}
            >
                {item.name}
            </a>
        ))}
    </div>
    </div>


    </div>


    </nav>
}