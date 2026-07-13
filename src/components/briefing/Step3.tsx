import type { BriefingFormData } from './types'
import { FieldLabel, IconOptionMulti, PillMulti, PillSingle, TextAreaField } from './ui'
import { estagioPlanejamentoOptions, estiloViagemOptions, requisitosOptions, tipoAjudaOptions } from '../../data/briefingOptions'

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export function Step3({
  data,
  onChange,
}: {
  data: BriefingFormData['preferencias']
  onChange: (patch: Partial<BriefingFormData['preferencias']>) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <FieldLabel>Onde você está no planejamento?</FieldLabel>
        <PillSingle
          options={estagioPlanejamentoOptions}
          value={data.estagioPlanejamento}
          onChange={(v) => onChange({ estagioPlanejamento: v })}
        />
      </div>

      <div>
        <FieldLabel>Que tipo de ajuda você precisa para essa viagem?</FieldLabel>
        <IconOptionMulti
          options={tipoAjudaOptions}
          value={data.tipoAjuda}
          onToggle={(v) => onChange({ tipoAjuda: toggleValue(data.tipoAjuda, v) })}
        />
      </div>

      <div>
        <FieldLabel>Qual o seu estilo de viagem?</FieldLabel>
        <PillMulti
          options={estiloViagemOptions}
          value={data.estiloViagem}
          onToggle={(v) => onChange({ estiloViagem: toggleValue(data.estiloViagem, v) })}
        />
      </div>

      <div>
        <FieldLabel>Alguma preferência ou requisito para a viagem?</FieldLabel>
        <PillMulti
          options={requisitosOptions}
          value={data.requisitos}
          onToggle={(v) => onChange({ requisitos: toggleValue(data.requisitos, v) })}
        />
      </div>

      <TextAreaField
        label="Algum detalhe em específico que gostaria de compartilhar?"
        value={data.detalhes}
        onChange={(v) => onChange({ detalhes: v })}
        placeholder="Me conte mais sobre você e o que você espera da sua viagem: seus gostos e preferências, hotéis que já se hospedou e gostou, o que detesta em uma viagem..."
        maxLength={5000}
      />
    </div>
  )
}
