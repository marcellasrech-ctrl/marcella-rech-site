import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'

function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-secondary/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-base font-medium text-text sm:text-lg">{pergunta}</span>
        <ChevronDown
          className={`shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {open && <p className="pb-5 font-body text-text/90">{resposta}</p>}
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-3xl font-semibold text-text sm:text-4xl">
        Perguntas frequentes
      </h2>

      <div className="mt-12">
        {faqs.map((faq) => (
          <FaqItem key={faq.pergunta} pergunta={faq.pergunta} resposta={faq.resposta} />
        ))}
      </div>
    </section>
  )
}
