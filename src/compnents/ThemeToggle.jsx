import {Moon,Sun} from "lucide-react";
import {useState, useEffect} from "react";
import {cn} from "@/lib/utils";


export const ThemeToggle=()=>{
    const [isDarkmode,setIsDarkMode]=useState(true);

    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme")
        if (storedTheme === "light") {
            
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []);
    const toggletheme=()=>{
        if(isDarkmode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    };

    return(
        <button onClick={toggletheme} className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
        )}>
            {isDarkmode ?(
                <Sun className="h-6 w-6 text-yellow-300"/>
            ): (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    )


}





// import { Moon, Sun } from "lucide-react";
// import { useState, useEffect } from "react";

// export const ThemeToggle = () => {
//     const [isDarkmode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         if (storedTheme === "dark") {
//             setIsDarkMode(true);
//             document.documentElement.classList.add("dark");
//         } else {
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         }
//     }, []);

//     const toggletheme = () => {
//         if (isDarkmode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             setIsDarkMode(true);
//         }
//     };

//     return (
//         <button
//             onClick={toggletheme}
//             className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
//         >
//             {isDarkmode ? (
//                 <Sun className="h-6 w-6 text-yellow-300" />
//             ) : (
//                 <Moon className="h-6 w-6 text-blue-900" />
//             )}
//         </button>
//     );
// };