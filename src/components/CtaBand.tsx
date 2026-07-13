export default function CtaBand() {
  const scrollToBriefing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector('#briefing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta-1" className="bg-primary py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-background sm:text-3xl">
          Pronta(o) para planejar sua próxima viagem?
        </h2>
        <a
          href="#briefing"
          onClick={scrollToBriefing}
          className="rounded-full bg-background px-8 py-4 font-body text-lg font-medium text-primary transition-opacity hover:opacity-90"
        >
          Quero planejar minha viagem
        </a>
      </div>
    </section>
  )
}
