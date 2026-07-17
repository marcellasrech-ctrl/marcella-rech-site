import type { BriefingFormData } from './types'
import { PillMulti, TextField } from './ui'
import { objetivosViagemOptions } from '../../data/briefingOptions'

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export function Step3({
  data,
  onChange,
}: {
  data: BriefingFormData['objetivos']
  onChange: (patch: Partial<BriefingFormData['objetivos']>) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <PillMulti
        options={objetivosViagemOptions}
        value={data.selecionados}
        onToggle={(v) => onChange({ selecionados: toggleValue(data.selecionados, v) })}
      />

      {data.selecionados.includes('Outro') && (
        <TextField
          label="Conte mais sobre esse objetivo"
          value={data.outroTexto}
          onChange={(v) => onChange({ outroTexto: v })}
          placeholder="Descreva o que você tem em mente"
        />
      )}
    </div>
  )
}
