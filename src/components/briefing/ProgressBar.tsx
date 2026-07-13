const TOTAL_STEPS = 4

export function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-body text-xs text-secondary">
          Etapa {currentStep} de {TOTAL_STEPS}
        </span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              step <= currentStep ? 'bg-primary' : 'bg-secondary/20'
            }`}
          />
        ))}
      </div>
      <p className="mt-3 font-body text-xs italic text-secondary">
        Leva menos de 3 minutos para completar
      </p>
    </div>
  )
}
