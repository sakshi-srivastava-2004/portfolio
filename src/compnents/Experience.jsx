export const Experience = () => {
    return (
        <section id="exp" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Exper<span className="text-primary">ience</span>
                </h2>

                <div className="bg-card rounded-lg shadow-xs p-8 card-hover">
                    
                    {/* Top Row - Title and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-primary">
                            Data Analytics Intern
                        </h3>
                        <h4 className="text-md font-medium text-foreground mb-4">
                        Tata Steel — Jamshedpur, India
                    </h4>
                        </div>
                        
                        <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                            June 2024 – July 2024  {/* 👈 change to your actual dates */}
                        </span>
                    </div>

                    {/* Company Name */}
                     

                    {/* Divider */}
                    <div className="border-t border-border mb-4" />

                    {/* Description */}
                    <p className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Extracted highlighted regions from Excel input files using <span className="font-bold">Python</span> with <span className="font-bold">OpenPyXL</span>,
                        then averaged daily data into weekly summaries using <span className="font-bold">Pandas</span> and <span className="font-bold">NumPy</span> to reduce
                        output variation. Developed a script to identify and process highlighted cells
                        in Excel files, compute weekly averages from day-wise data, and minimized fluctuations
                        using data processing libraries — leveraging <span className="font-bold">OpenPyXL</span> for <span className="font-bold">Excel handling, Pandas for data
                        manipulation, and NumPy</span> for numerical operations to generate stable weekly averages from
                        raw daily datasets from various locations pan India.
                    </p>

                </div>
            </div>
        </section>
    );
};