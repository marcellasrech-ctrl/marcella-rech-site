import type { ChangeEvent, ReactNode } from 'react'
import {
  Hotel,
  Plane,
  Ship,
  PlaneTakeoff,
  Users,
  Compass,
  Car,
  UtensilsCrossed,
  Ticket,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  Hotel,
  Plane,
  Ship,
  PlaneTakeoff,
  Users,
  Compass,
  Car,
  UtensilsCrossed,
  Ticket,
  HelpCircle,
}

const inputClasses =
  'w-full rounded-xl border border-secondary/30 bg-background px-4 py-3 font-body text-text placeholder:text-secondary/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

function toId(label: string) {
  return label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function FieldLabel({ htmlFor, children }: { htmlFor?: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-body text-sm text-background">
      {children}
    </label>
  )
}

export function TextField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  icon,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  icon?: ReactNode
}) {
  const id = toId(label)
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        {icon && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary">{icon}</span>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${inputClasses} ${icon ? 'pl-11' : ''}`}
        />
      </div>
    </div>
  )
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = 'Selecione uma opção',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder?: string
}) {
  const id = toId(label)
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  maxLength?: number
}) {
  const id = toId(label)
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
        placeholder={placeholder}
        rows={5}
        maxLength={maxLength}
        className={inputClasses}
      />
      {maxLength && (
        <p className="mt-1 text-right font-body text-xs text-background/70">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  )
}

export function PillSingle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T | ''
  onChange: (value: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const selected = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-5 py-2.5 font-body text-sm transition-colors ${
              selected
                ? 'border-background bg-background text-primary'
                : 'border-background/40 bg-transparent text-background hover:border-background'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export function PillMulti({
  options,
  value,
  onToggle,
}: {
  options: string[]
  value: string[]
  onToggle: (option: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const selected = value.includes(option)
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={`rounded-full border px-5 py-2.5 font-body text-sm transition-colors ${
              selected
                ? 'border-background bg-background text-primary'
                : 'border-background/40 bg-transparent text-background hover:border-background'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export function IconOptionMulti({
  options,
  value,
  onToggle,
}: {
  options: { value: string; label: string; icon: string }[]
  value: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const Icon = iconMap[option.icon]
        const selected = value.includes(option.value)
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onToggle(option.value)}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-body text-sm transition-colors ${
              selected
                ? 'border-background bg-background text-primary'
                : 'border-background/40 bg-transparent text-background hover:border-background'
            }`}
          >
            {Icon && <Icon size={18} className="shrink-0" />}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export function Toggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T | ''
  onChange: (value: T) => void
}) {
  return (
    <div className="inline-flex rounded-full border border-background/40 p-1">
      {options.map((option) => {
        const selected = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-4 py-2 font-body text-sm transition-colors ${
              selected ? 'bg-background text-primary' : 'text-background'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffixWhenMax = '+',
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  suffixWhenMax?: string
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <FieldLabel>{label}</FieldLabel>
        <span className="font-heading text-lg font-semibold text-background">
          {formatCurrency(value)}
          {value >= max ? suffixWhenMax : ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-background"
      />
    </div>
  )
}
