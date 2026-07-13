export type TipoEmail = 'pessoal' | 'trabalho'
export type PreferenciaContato = 'whatsapp' | 'email'
export type TipoData = 'especifica' | 'flexivel'
export type DuracaoFlexivel = '2-3-dias' | 'semana' | 'estendido'
export type ParaQuem = 'somente-eu' | 'eu-e-parceiro' | 'familia' | 'grupo-pequeno' | 'grupo-grande'
export type EstagioPlanejamento = 'sonhando' | 'pesquisando' | 'pronto-para-reservar'

export interface BriefingFormData {
  contato: {
    nome: string
    sobrenome: string
    codigoPais: string
    celular: string
    email: string
    tipoEmail: TipoEmail
    preferenciaContato: PreferenciaContato | ''
    cidade: string
  }
  viagem: {
    destino: string
    motivo: string
    tipoData: TipoData
    dataInicio: string
    dataFim: string
    duracaoFlexivel: DuracaoFlexivel | ''
    mesAnoFlexivel: string
    paraQuem: ParaQuem | ''
    orcamentoTotal: number
    orcamentoPorNoite: number
  }
  preferencias: {
    estagioPlanejamento: EstagioPlanejamento | ''
    tipoAjuda: string[]
    estiloViagem: string[]
    requisitos: string[]
    detalhes: string
  }
  restricoes: {
    alergiasComuns: string[]
    alergiasCustomizadas: string[]
  }
}

export const initialFormData: BriefingFormData = {
  contato: {
    nome: '',
    sobrenome: '',
    codigoPais: '+55',
    celular: '',
    email: '',
    tipoEmail: 'pessoal',
    preferenciaContato: '',
    cidade: '',
  },
  viagem: {
    destino: '',
    motivo: '',
    tipoData: 'especifica',
    dataInicio: '',
    dataFim: '',
    duracaoFlexivel: '',
    mesAnoFlexivel: '',
    paraQuem: '',
    orcamentoTotal: 20000,
    orcamentoPorNoite: 800,
  },
  preferencias: {
    estagioPlanejamento: '',
    tipoAjuda: [],
    estiloViagem: [],
    requisitos: [],
    detalhes: '',
  },
  restricoes: {
    alergiasComuns: [],
    alergiasCustomizadas: [],
  },
}

export function validateStep(step: number, data: BriefingFormData): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (step === 1) {
    const { nome, sobrenome, celular, email, preferenciaContato, cidade } = data.contato
    return (
      nome.trim().length > 0 &&
      sobrenome.trim().length > 0 &&
      celular.replace(/\D/g, '').length >= 8 &&
      emailRegex.test(email.trim()) &&
      preferenciaContato !== '' &&
      cidade.trim().length > 0
    )
  }

  if (step === 2) {
    const { destino, motivo, tipoData, dataInicio, dataFim, duracaoFlexivel, mesAnoFlexivel, paraQuem } =
      data.viagem
    if (!destino.trim() || !motivo || !paraQuem) return false
    if (tipoData === 'especifica') {
      return Boolean(dataInicio && dataFim)
    }
    return Boolean(duracaoFlexivel && mesAnoFlexivel)
  }

  if (step === 3) {
    const { estagioPlanejamento, tipoAjuda, estiloViagem } = data.preferencias
    return Boolean(estagioPlanejamento) && tipoAjuda.length > 0 && estiloViagem.length > 0
  }

  return true
}
