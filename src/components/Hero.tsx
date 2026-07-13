import foraLogoSand from '../assets/fora-logo-sand.png'
import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section id="hero" className="relative flex h-screen items-end justify-center overflow-hidden">
      <div
        role="img"
        aria-label="Marcella Rech em uma paisagem de deserto com montanhas ao fundo"
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 15%',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(19,19,19,0.75), rgba(19,19,19,0.15) 55%, rgba(19,19,19,0))',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 pb-20 text-center sm:pb-24">
        <h1
          className="font-heading font-bold text-white"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
        >
          Marcella Rech
        </h1>
        <p className="mt-4 font-body italic text-white/90 tracking-wide" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
          Travel Advisor
        </p>
        <div className="mt-5 flex items-center gap-2 text-white/80">
          <span className="font-body text-xs sm:text-sm">Powered by</span>
          <img
            src={foraLogoSand}
            alt="Logo Fora Travel"
            className="h-4 w-auto sm:h-5"
          />
        </div>
      </div>
    </section>
  )
}
