// Listas de opções usadas no formulário de briefing (wizard da seção #briefing).
// Para adicionar/remover uma opção, edite a lista correspondente abaixo.

export const codigosPais = [
  { code: '+55', label: 'Brasil (+55)' },
  { code: '+1', label: 'EUA/Canadá (+1)' },
  { code: '+351', label: 'Portugal (+351)' },
  { code: '+34', label: 'Espanha (+34)' },
  { code: '+33', label: 'França (+33)' },
  { code: '+39', label: 'Itália (+39)' },
  { code: '+44', label: 'Reino Unido (+44)' },
  { code: '+49', label: 'Alemanha (+49)' },
  { code: '+54', label: 'Argentina (+54)' },
  { code: '+81', label: 'Japão (+81)' },
  { code: '+82', label: 'Coreia do Sul (+82)' },
]

export const motivosViagem = [
  'Aniversário',
  'Formatura',
  'Aniversário de casamento',
  'Negócios',
  'Conferência',
  'Viagem em casal',
  'Lua de mel',
  'Casamento',
  'Retiro',
  'Viagem em grupo',
  'Viagem com amigos',
  'Festival',
  'Férias em família',
  'Intercâmbio',
  'Off-site da empresa',
]

export const duracaoFlexivelOptions: { value: '2-3-dias' | 'semana' | 'estendido'; label: string }[] = [
  { value: '2-3-dias', label: '2-3 dias' },
  { value: 'semana', label: '1 semana' },
  { value: 'estendido', label: 'Estendido' },
]

export const paraQuemOptions: {
  value: 'somente-eu' | 'eu-e-parceiro' | 'familia' | 'grupo-pequeno' | 'grupo-grande'
  label: string
}[] = [
  { value: 'somente-eu', label: 'Somente eu' },
  { value: 'eu-e-parceiro', label: 'Eu e meu parceiro(a)' },
  { value: 'familia', label: 'Família' },
  { value: 'grupo-pequeno', label: 'Grupo pequeno' },
  { value: 'grupo-grande', label: 'Grupo grande (10+)' },
]

export const estagioPlanejamentoOptions: {
  value: 'sonhando' | 'pesquisando' | 'pronto-para-reservar'
  label: string
}[] = [
  { value: 'sonhando', label: 'Só sonhando' },
  { value: 'pesquisando', label: 'Pesquisando' },
  { value: 'pronto-para-reservar', label: 'Pronto para reservar' },
]

// "icon" se refere ao nome do ícone lucide-react usado em src/components/briefing/ui.tsx
export const tipoAjudaOptions: { value: string; label: string; icon: string }[] = [
  { value: 'hotel', label: 'Reservar hotel ou hospedagem', icon: 'Hotel' },
  { value: 'voo', label: 'Reservar voo', icon: 'Plane' },
  { value: 'cruzeiro', label: 'Reservar cruzeiro', icon: 'Ship' },
  { value: 'grupo-evento', label: 'Planejar grupo ou evento especial', icon: 'Users' },
  { value: 'passeios', label: 'Passeios e experiências', icon: 'Compass' },
  { value: 'transporte', label: 'Transporte terrestre', icon: 'Car' },
  { value: 'restaurantes', label: 'Restaurantes e gastronomia', icon: 'UtensilsCrossed' },
  { value: 'atividades', label: 'Atividades e eventos', icon: 'Ticket' },
  { value: 'ainda-nao-sei', label: 'Ainda não sei', icon: 'HelpCircle' },
]

export const estiloViagemOptions = [
  'Luxo em tudo',
  'Boutique e local',
  'Mix de luxo e economia',
  'Casual ou econômico',
  'Ainda não sei',
]

export const requisitosOptions = [
  'Acessibilidade',
  'Viajando com criança pequena',
  'Alergia (glúten, etc.)',
  'Restrições alimentares (vegano/vegetariano)',
  'Primeira viagem internacional',
  'Considerações de segurança',
  'Nenhuma opção',
]

export const alergiasComunsOptions = ['Lactose', 'Amendoim', 'Vegano', 'Vegetariano', 'Nozes']
