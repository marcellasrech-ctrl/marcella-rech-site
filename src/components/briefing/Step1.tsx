import type { BriefingFormData } from './types'
import { FieldLabel, PillSingle, TextField, Toggle } from './ui'
import { codigosPais } from '../../data/briefingOptions'

export function Step1({
  data,
  onChange,
}: {
  data: BriefingFormData['contato']
  onChange: (patch: Partial<BriefingFormData['contato']>) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Nome" value={data.nome} onChange={(v) => onChange({ nome: v })} />
        <TextField
          label="Sobrenome"
          value={data.sobrenome}
          onChange={(v) => onChange({ sobrenome: v })}
        />
      </div>

      <div>
        <FieldLabel htmlFor="celular">Número de celular</FieldLabel>
        <div className="flex gap-2">
          <select
            aria-label="Código do país"
            value={data.codigoPais}
            onChange={(e) => onChange({ codigoPais: e.target.value })}
            className="w-32 shrink-0 rounded-xl border border-secondary/30 bg-background px-2 py-3 font-body text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {codigosPais.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="celular"
            type="tel"
            value={data.celular}
            onChange={(e) => onChange({ celular: e.target.value })}
            placeholder="00000-0000"
            className="w-full rounded-xl border border-secondary/30 bg-background px-4 py-3 font-body text-text placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="email">E-mail</FieldLabel>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="seuemail@exemplo.com"
            className="w-full rounded-xl border border-secondary/30 bg-background px-4 py-3 font-body text-text placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Toggle
            options={[
              { value: 'pessoal', label: 'Pessoal' },
              { value: 'trabalho', label: 'Trabalho' },
            ]}
            value={data.tipoEmail}
            onChange={(v) => onChange({ tipoEmail: v })}
          />
        </div>
      </div>

      <div>
        <FieldLabel>Por onde prefere manter a comunicação?</FieldLabel>
        <PillSingle
          options={[
            { value: 'whatsapp', label: 'WhatsApp' },
            { value: 'email', label: 'E-mail' },
          ]}
          value={data.preferenciaContato}
          onChange={(v) => onChange({ preferenciaContato: v })}
        />
      </div>

      <TextField label="Qual a sua cidade?" value={data.cidade} onChange={(v) => onChange({ cidade: v })} />
    </div>
  )
}
