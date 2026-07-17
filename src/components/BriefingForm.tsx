import { useState } from 'react'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import { WEB3FORMS_ACCESS_KEY } from '../data/siteConfig'
import { initialFormData, validateStep, type BriefingFormData } from './briefing/types'
import { ProgressBar } from './briefing/ProgressBar'
import { Step1 } from './briefing/Step1'
import { Step2 } from './briefing/Step2'
import { Step3 } from './briefing/Step3'
import { Step4 } from './briefing/Step4'
import { Step5 } from './briefing/Step5'
import { SuccessScreen } from './briefing/SuccessScreen'
import { formatCurrency } from './briefing/ui'
import briefingBg from '../assets/briefing-bg.png'

const TOTAL_STEPS = 5

const stepTitles: Record<number, string> = {
  1: 'Vamos nos conhecer',
  2: 'Conte sobre a viagem',
  3: 'Os objetivos da sua viagem',
  4: 'Seu estilo e preferências',
  5: 'Alergias e restrições (opcional)',
}

const stepSubtitles: Record<number, string> = {
  3: 'O que você está buscando?',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function BriefingForm() {
  const [formData, setFormData] = useState<BriefingFormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [botcheck, setBotcheck] = useState('')

  const updateContato = (patch: Partial<BriefingFormData['contato']>) =>
    setFormData((prev) => ({ ...prev, contato: { ...prev.contato, ...patch } }))

  const updateViagem = (patch: Partial<BriefingFormData['viagem']>) =>
    setFormData((prev) => ({ ...prev, viagem: { ...prev.viagem, ...patch } }))

  const updateObjetivos = (patch: Partial<BriefingFormData['objetivos']>) =>
    setFormData((prev) => ({ ...prev, objetivos: { ...prev.objetivos, ...patch } }))

  const updatePreferencias = (patch: Partial<BriefingFormData['preferencias']>) =>
    setFormData((prev) => ({ ...prev, preferencias: { ...prev.preferencias, ...patch } }))

  const updateRestricoes = (patch: Partial<BriefingFormData['restricoes']>) =>
    setFormData((prev) => ({ ...prev, restricoes: { ...prev.restricoes, ...patch } }))

  const canContinue = validateStep(currentStep, formData)

  const handleNext = () => {
    if (canContinue && currentStep < TOTAL_STEPS) setCurrentStep((s) => s + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  const handleSubmit = async () => {
    if (botcheck) return

    setStatus('loading')
    setErrorMessage('')

    const { contato, viagem, objetivos, preferencias, restricoes } = formData

    const datas =
      viagem.tipoData === 'especifica'
        ? `${viagem.dataInicio} a ${viagem.dataFim}`
        : `${viagem.duracaoFlexivel}, aproximadamente ${viagem.mesAnoFlexivel}`

    const todasAlergias = [...restricoes.alergiasComuns, ...restricoes.alergiasCustomizadas]

    const objetivosViagem = objetivos.selecionados
      .map((item) => (item === 'Outro' && objetivos.outroTexto ? `Outro: ${objetivos.outroTexto}` : item))
      .join(', ')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Formulário Fora Travel',
          subject: `Novo Briefing de Viagem: ${contato.nome} ${contato.sobrenome}`,
          nome_completo: `${contato.nome} ${contato.sobrenome}`,
          celular: `${contato.codigoPais} ${contato.celular}`,
          email: contato.email,
          tipo_email: contato.tipoEmail,
          preferencia_contato: contato.preferenciaContato,
          cidade: contato.cidade,
          destino: viagem.destino,
          motivo_viagem: viagem.motivo,
          datas,
          para_quem: viagem.paraQuem,
          orcamento_total: formatCurrency(viagem.orcamentoTotal),
          orcamento_por_noite: formatCurrency(viagem.orcamentoPorNoite),
          ja_comprou_passagens: viagem.passagemComprada === 'sim' ? 'Sim' : viagem.passagemComprada === 'nao' ? 'Não' : 'Não informado',
          objetivos_da_viagem: objetivosViagem || 'Nenhum',
          estagio_planejamento: preferencias.estagioPlanejamento,
          tipo_ajuda: preferencias.tipoAjuda.join(', '),
          estilo_viagem: preferencias.estiloViagem.join(', '),
          requisitos: preferencias.requisitos.join(', ') || 'Nenhum',
          detalhes: preferencias.detalhes,
          alergias_e_restricoes: todasAlergias.join(', ') || 'Nenhuma',
          resumo_completo_json: JSON.stringify(formData),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(
          'Não consegui enviar seu briefing agora. Tente novamente em instantes ou me chame direto pelo WhatsApp.',
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage('Não consegui enviar seu briefing agora. Verifique sua conexão e tente novamente.')
    }
  }

  return (
    <section id="briefing" className="bg-secondary/5 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-sm md:grid md:grid-cols-[40%_60%]">
          <div className="relative h-[25vh] md:h-auto">
            <div
              role="img"
              aria-label="Vista aérea de um avião sobrevoando águas turquesa"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${briefingBg})`,
              }}
            />
          </div>

          <div className="bg-primary p-6 pb-24 sm:p-10">
            <input
              id="botcheck"
              type="text"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
            />

            {status === 'success' ? (
              <SuccessScreen />
            ) : (
              <>
                <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

                <h2 className="font-heading text-2xl font-semibold text-background sm:text-3xl">
                  {stepTitles[currentStep]}
                </h2>
                {stepSubtitles[currentStep] && (
                  <p className="mb-6 mt-1 font-body italic text-background/80">{stepSubtitles[currentStep]}</p>
                )}
                {!stepSubtitles[currentStep] && <div className="mb-6" />}

                {currentStep === 1 && <Step1 data={formData.contato} onChange={updateContato} />}
                {currentStep === 2 && <Step2 data={formData.viagem} onChange={updateViagem} />}
                {currentStep === 3 && <Step3 data={formData.objetivos} onChange={updateObjetivos} />}
                {currentStep === 4 && <Step4 data={formData.preferencias} onChange={updatePreferencias} />}
                {currentStep === 5 && <Step5 data={formData.restricoes} onChange={updateRestricoes} />}

                {status === 'error' && (
                  <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
                )}

                <div className="mt-8 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-1 font-body text-sm text-background hover:opacity-80"
                    >
                      <ChevronLeft size={18} />
                      Voltar
                    </button>
                  ) : (
                    <span />
                  )}

                  {currentStep < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canContinue}
                      className="flex items-center gap-2 rounded-full bg-background px-6 py-3 font-body text-sm font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continuar
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === 'loading'}
                      className="flex items-center gap-2 rounded-full bg-background px-6 py-3 font-body text-sm font-medium text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'loading' ? 'Enviando...' : 'Enviar'}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
