import { Hotel, Ship, Map, type LucideIcon } from 'lucide-react'
import { services, type Service } from '../data/services'

const icons: Record<Service['icon'], LucideIcon> = {
  hotel: Hotel,
  ship: Ship,
  map: Map,
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    <div className="flex flex-col rounded-2xl border border-secondary/20 bg-background p-8 shadow-sm">
      <Icon className="text-primary" size={36} strokeWidth={1.5} />
      <h3 className="mt-5 font-heading text-xl font-semibold text-text">{service.title}</h3>
      <div className="mt-3 flex flex-col gap-3">
        {service.text.map((paragraph) => (
          <p key={paragraph} className="font-body text-text/90">
            {paragraph}
          </p>
        ))}
      </div>

      {service.bullets && (
        <ul className="mt-4 flex flex-col gap-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 font-body text-text/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {service.note && (
        <p className="mt-5 font-body text-sm italic text-secondary">{service.note}</p>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <p
        className="text-center font-body italic text-primary tracking-wide"
        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
      >
        Meus serviços
      </p>
      <h2 className="mt-2 text-center font-heading text-3xl font-semibold text-text sm:text-4xl">
        Como posso te ajudar
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}
