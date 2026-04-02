import { ArrowDown } from "lucide-react";



export const HeroSection=()=>{
    return (
    <section 
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="animate-fade-in">Sakshi</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                        Srivastava
                        </span>
                    
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    A software engineer driven by a passion for technology, innovation, and problem-solving.
                      
                </p>
                <div className="pt-4 animate-fade-in-delay-4">
                    <a href="#project" className="cosmic-button">
                        View My Work
                    </a>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                 <a href="#about">
                <ArrowDown className="h-5 w-5 text-primary"/>
                </a>
                </div>

            </div>
        </div>




    </section>
    )


}