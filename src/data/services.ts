// Cards da seção "Como posso te ajudar". Para editar textos, mexa só nos valores abaixo.
// O campo "icon" aceita: "hotel", "ship" ou "map" (usados para escolher o ícone do card).

export type Service = {
  icon: 'hotel' | 'ship' | 'map'
  title: string
  // Cada item da lista vira um parágrafo separado (com espaçamento entre eles).
  // Para um card com um só parágrafo, deixe só um item na lista.
  text: string[]
  bullets?: string[]
  note?: string
}

export const services: Service[] = [
  {
    icon: 'hotel',
    title: 'Reserva de hotel',
    text: [
      'Você já sabe para onde vai, mas por que não tornar ainda melhor? Eu cuido da reserva sem nenhum custo e busco desbloquear benefícios exclusivos:',
    ],
    bullets: [
      'Upgrade de quarto',
      'Café da manhã',
      'Crédito de spa ou restaurante',
      'Early check-in e late check-out',
      'Boas-vindas na chegada',
    ],
    note: '*Sem nenhum custo para você.',
  },
  {
    icon: 'ship',
    title: 'Reserva de cruzeiro',
    text: [
      'Qual cruzeiro combina com você?',
      'Me conte o que você procura e eu encontro a opção certa: companhias, navios e roteiros fora do óbvio, que a maioria não conhece.',
    ],
    note: '*Sem custo para reservas individuais ou casais. Viagem em grupo possui taxa de planejamento.',
  },
  {
    icon: 'map',
    title: 'Roteiro personalizado',
    text: [
      'Quer a viagem toda planejada? Eu desenho sua viagem do início ao fim, em torno dos seus objetivos:',
    ],
    bullets: ['Hospedagens', 'Transporte terrestre', 'Seguro viagem', 'Passeios e experiências'],
    note: '*Orçamento sob medida, preencha o formulário de briefing e receba o seu',
  },
]
