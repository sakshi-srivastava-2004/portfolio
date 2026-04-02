
const projects=[

    {
        name:"Smart Motion-Based Light Control System ",
        techstack:["Arduino IDE"],
        desc:`Built the system using a PIR sensor and microcontroller with code executed via Arduino IDE.
              Automated light switching based on human motion detection, enabling hands-free and energy-
              efficient control.`,
        image:"/sensor.jpg"

    },
    {
        name:"JustPost" ,
        techstack:[" React", "Node.js", "Express.js", "MongoDB"],
        desc:`Full-stack app built with React, Node.js, Express, and MongoDB. Features separate dashboards for writers and composers with REST APIs handling authentication, routing, and hire interactions.`,
        image:"/jp.jpg"
    },
    {
        name:"Marathi Finance Chatbot",
        techstack:["Google Translate", "GPT", "Helsinki-NLP"],
        image:"/finance.jpg",
        desc:`Marathi finance chatbot using Python, LLMs, Google Translate API, and Helsinki-NLP for marathi query processing and finance-specific response generation.`

    },
];


export const ProjectSection = () => {
    return (
        <section id="project" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-3 gap-6">
                    {projects.map((project, key) => (
                        <div key={key} className="bg-card rounded-lg shadow-xs overflow-hidden card-hover flex flex-col">

                            {/* Project Image on top */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-40 object-cover"
                            />

                            {/* Content below image */}
                            <div className="p-5 flex flex-col gap-3">

                                {/* Project Name */}
                                <h3 className="text-lg font-semibold text-white">
                                    {project.name}
                                </h3>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techstack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-white font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="border-t border-border" />

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.desc}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};