import aboutMarcella from '../assets/about-marcella.jpg'

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-3xl font-semibold text-text sm:text-4xl">
        Sobre mim
      </h2>

      <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <img
          src={aboutMarcella}
          alt="Marcella Rech sorrindo em uma paisagem de deserto com montanhas ao fundo"
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-sm"
        />

        <div className="flex flex-col gap-5">
          <p className="font-body text-lg leading-relaxed text-text">
            Sempre fui aquela amiga que todo mundo chama para pedir dica de viagem. Morei em
            Portugal por 3 anos, fiz um ano sabático fazendo voluntariado na Europa, morei por 6
            meses na Coreia do Sul. Foram inúmeras experiências que me tornaram essa pessoa
            apaixonada pelo mundo.
          </p>
          <p className="font-body text-lg leading-relaxed text-text">
            Viajar sempre foi uma parte essencial da minha vida e poder agora ajudar outras
            pessoas a criarem experiências que realmente marcam vai ser uma realização enorme!
          </p>
          <p className="font-body text-lg leading-relaxed text-text">
            Viagem em grupo, lua de mel, férias em família, um roteiro completo ou só aquela
            reserva do hotel que você já tem em mente… pode contar comigo :)
          </p>
        </div>
      </div>
    </section>
  )
}
