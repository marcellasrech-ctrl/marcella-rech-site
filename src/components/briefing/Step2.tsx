import type { BriefingFormData } from './types'
import { FieldLabel, PillSingle, SelectField, SliderField, TextField, Toggle } from './ui'
import { duracaoFlexivelOptions, motivosViagem, paraQuemOptions } from '../../data/briefingOptions'

export function Step2({
  data,
  onChange,
}: {
  data: BriefingFormData['viagem']
  onChange: (patch: Partial<BriefingFormData['viagem']>) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <TextField
        label="Qual o seu destino?"
        value={data.destino}
        onChange={(v) => onChange({ destino: v })}
        placeholder="Escreva o destino que você tem em mente"
      />

      <SelectField
        label="Qual a razão da sua viagem?"
        value={data.motivo}
        onChange={(v) => onChange({ motivo: v })}
        options={motivosViagem}
      />

      <div>
        <FieldLabel>Por quanto tempo você pensa em viajar?</FieldLabel>
        <Toggle
          options={[
            { value: 'especifica', label: 'Data específica' },
            { value: 'flexivel', label: 'Flexível' },
          ]}
          value={data.tipoData}
          onChange={(v) => onChange({ tipoData: v })}
        />

        {data.tipoData === 'especifica' ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextField
              label="Data de início"
              type="date"
              value={data.dataInicio}
              onChange={(v) => onChange({ dataInicio: v })}
            />
            <TextField
              label="Data de fim"
              type="date"
              value={data.dataFim}
              onChange={(v) => onChange({ dataFim: v })}
            />
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-4">
            <PillSingle
              options={duracaoFlexivelOptions}
              value={data.duracaoFlexivel}
              onChange={(v) => onChange({ duracaoFlexivel: v })}
            />
            <TextField
              label="Mês/ano estimado"
              type="month"
              value={data.mesAnoFlexivel}
              onChange={(v) => onChange({ mesAnoFlexivel: v })}
            />
          </div>
        )}
      </div>

      <div>
        <FieldLabel>Para quem é a viagem?</FieldLabel>
        <PillSingle options={paraQuemOptions} value={data.paraQuem} onChange={(v) => onChange({ paraQuem: v })} />
      </div>

      <SliderField
        label="Qual o orçamento total para a viagem?"
        value={data.orcamentoTotal}
        onChange={(v) => onChange({ orcamentoTotal: v })}
        min={0}
        max={100000}
        step={1000}
      />

      <SliderField
        label="Quanto você gostaria de investir por noite em acomodação?"
        value={data.orcamentoPorNoite}
        onChange={(v) => onChange({ orcamentoPorNoite: v })}
        min={0}
        max={5000}
        step={100}
      />
    </div>
  )
}
