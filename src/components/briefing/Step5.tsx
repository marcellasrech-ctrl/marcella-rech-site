import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import type { BriefingFormData } from './types'
import { FieldLabel, PillMulti } from './ui'
import { alergiasComunsOptions } from '../../data/briefingOptions'

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export function Step5({
  data,
  onChange,
}: {
  data: BriefingFormData['restricoes']
  onChange: (patch: Partial<BriefingFormData['restricoes']>) => void
}) {
  const [showInput, setShowInput] = useState(false)
  const [novaRestricao, setNovaRestricao] = useState('')

  const addRestricao = () => {
    const value = novaRestricao.trim()
    if (!value) return
    onChange({ alergiasCustomizadas: [...data.alergiasCustomizadas, value] })
    setNovaRestricao('')
    setShowInput(false)
  }

  const removeRestricao = (value: string) => {
    onChange({ alergiasCustomizadas: data.alergiasCustomizadas.filter((v) => v !== value) })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <FieldLabel>Alguma alergia ou restrição alimentar?</FieldLabel>
        <PillMulti
          options={alergiasComunsOptions}
          value={data.alergiasComuns}
          onToggle={(v) => onChange({ alergiasComuns: toggleValue(data.alergiasComuns, v) })}
        />
      </div>

      <div>
        {data.alergiasCustomizadas.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {data.alergiasCustomizadas.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full bg-background px-4 py-2 font-body text-sm text-primary"
              >
                {item}
                <button
                  type="button"
                  onClick={() => removeRestricao(item)}
                  aria-label={`Remover ${item}`}
                  className="text-primary/60 hover:text-primary"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        {showInput ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={novaRestricao}
              onChange={(e) => setNovaRestricao(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addRestricao()
                }
              }}
              placeholder="Descreva a restrição"
              autoFocus
              className="w-full rounded-xl border border-secondary/30 bg-background px-4 py-3 font-body text-text placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="button"
              onClick={addRestricao}
              className="shrink-0 rounded-xl bg-background px-4 py-3 font-body text-sm text-primary"
            >
              Adicionar
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowInput(true)}
            className="flex items-center gap-1 font-body text-sm text-background hover:underline"
          >
            <Plus size={16} />
            adicionar outra restrição
          </button>
        )}
      </div>
    </div>
  )
}
