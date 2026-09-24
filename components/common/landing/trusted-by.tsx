'use client'

export function TrustedBy() {
  const companies = [
    {
      name: 'Si Dent',
      image: '/trusted-client/si-dent.png',
    },
    {
      name: 'Jai Dent',
      image: '/trusted-client/jaident.png',
    },
    {
      name: 'Selvin',
      image: '/trusted-client/selvin.jpeg',
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-foreground/60">
          Trusted by Top Dental Clinics & Health Networks
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex min-w-[220px] items-center justify-center gap-4 rounded-xl border border-border/70 bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg"
            >
              {/* Logo */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <img
                  src={company.image}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Company Name */}
              <span className="text-sm font-bold text-foreground/80 transition-colors group-hover:text-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}