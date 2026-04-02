



export const Certificate=()=>{
    return (
        <section id="cert" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Certifica<span className="text-primary">tions</span>
                </h2>
                <div className="bg-card rounded-lg shadow-xs overflow-hidden card-hover max-w-xs mx-auto w-full">
                    <img
          src="/DP900.webp"
          alt="Microsoft Azure Fundamentals"
          className="w-full h-38 object-contain p-2"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">Microsoft Azure Fundamentals</h3>
          <p className="text-sm text-muted-foreground mb-3">Issued by : Microsoft</p>

          {/* Link to certificate */}
          <a
            href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/?practice-assessment-type=certification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline"
          >
            View Certificate →
          </a>
        </div>

                </div>

            </div>
        </section>
    )


}