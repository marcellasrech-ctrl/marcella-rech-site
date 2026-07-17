export function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-body text-xs text-background/80">
          Etapa {currentStep} de {totalSteps}
        </span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              step <= currentStep ? 'bg-background' : 'bg-background/20'
            }`}
          />
        ))}
      </div>
      <p className="mt-3 font-body text-xs italic text-background/70">
        Leva menos de 3 minutos para completar
      </p>
    </div>
  )
}
