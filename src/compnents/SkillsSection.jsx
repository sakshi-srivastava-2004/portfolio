import {useState} from "react";
import {cn} from "@/lib/utils";
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMysql, SiTailwindcss, SiPandas, SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
// import { SiPython } from "react-icons/di";



//     //languages
//     {name:"C/C++",level:95,category:"languages"},
//     {name:"Java",level:90,category:"languages"},
//     {name:"Python",level:90,category:"languages"},
//     {name:"HTML/CSS",level:95,category:"languages"},  

//     {name:"JavaScript",level:90,category:"languages"},
//     {name:"SQL",level:90,category:"languages"},
    

    
//     {name:"Tailwind CSS",level:85,category:"frontend"},


//     //frameworks
//     {name:"Pandas",level:95,category:"frameworks"},
//     {name:"OpenPyxl",level:95,category:"frameworks"},

//     {name:"React",level:95,category:"frameworks"},

//     {name:"Node.js",level:90,category:"frameworks"},
//     {name:"Express",level:95,category:"frameworks"},
    
    

//     //tools

//     {name:"Git/Github",level:90,category:"tools"},
//     {name:"VS Code",level:85,category:"tools"},
//     {name:"MongoDB Compass",level:100,category:"tools"},

    
// ];

 const skills=[
  { name: "C/C++",      level: 95, category: "languages",  icon: <SiCplusplus /> },
  { name: "Java",       level: 90, category: "languages",  icon: <FaJava /> },
  { name: "Python",     level: 90, category: "languages",  icon: <FaPython /> },
  { name: "HTML/CSS",   level: 95, category: "languages",  icon: <FaHtml5 /> },
  { name: "JavaScript", level: 90, category: "languages",  icon: <SiJavascript /> },
  { name: "SQL",        level: 90, category: "languages",  icon: <SiMysql /> },
  { name: "Tailwind CSS", level: 85, category: "languages", icon: <SiTailwindcss /> },
  { name: "Pandas",     level: 95, category: "frameworks", icon: <SiPandas /> },
//   { name: "OpenPyxl",   level: 95, category: "frameworks", icon: <SiPython /> },
  { name: "React",      level: 95, category: "frameworks", icon: <FaReact /> },
  { name: "Node.js",    level: 90, category: "frameworks", icon: <FaNodeJs /> },
  { name: "Express",    level: 95, category: "frameworks", icon: <SiExpress /> },
  { name: "Git/Github",      level: 90,  category: "tools", icon: <FaGitAlt /> },
  { name: "VS Code",         level: 85,  category: "tools", icon: <VscVscode /> },
  { name: "MongoDB Compass", level: 100, category: "tools", icon: <SiMongodb /> },
];

const categories=["all","languages","frameworks","tools"];

export const SKillsSection=()=>{
    const [activeCategory,setActiveCategory]=useState("all");
    const filteredSkills =skills.filter(skill =>activeCategory==="all"|| skill.category===activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category,key)=>(
                            <button
                                key={key}
                                onClick={()=>setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory===category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bd-secondary"
                                )}>
                                    {category}
                            </button>
                        ))
                    }

                </div>
                <div className="grid grid-cols-1 sm:grid-cols lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card hover">
                             <div className="text-left mb-4 flex items-center gap-3">
                                <span className="text-3xl text-primary">{skill.icon}</span>
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                             </div>
                             
                        </div>
                    )
                    )}

                </div>
            </div>





        </section>
    )
}