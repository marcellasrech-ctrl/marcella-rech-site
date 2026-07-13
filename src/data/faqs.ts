// Perguntas frequentes exibidas na seção FAQ.
// Para adicionar uma nova pergunta, copie um bloco { pergunta: ..., resposta: ... },
// cole logo abaixo do último item (antes do "]") e edite os textos entre aspas.

export type Faq = {
  pergunta: string
  resposta: string
}

export const faqs: Faq[] = [
  {
    pergunta: 'Contratar uma travel advisor custa mais caro do que reservar por conta própria?',
    resposta:
      'Não. Na reserva de hotel e na reserva de cruzeiro individual ou para casais, não há nenhum custo adicional para você — eu recebo comissão diretamente dos fornecedores, e ainda busco benefícios extras que você não teria reservando sozinho(a).',
  },
  {
    pergunta: 'Como funciona a reserva de hotel? Tem algum custo?',
    resposta:
      'Nenhum. Você me conta onde já pensa em ficar (ou pede sugestões) e eu cuido da reserva, buscando benefícios como upgrade de quarto, café da manhã, early check-in, late check-out e créditos de spa ou restaurante, sempre que a rede do hotel permitir.',
  },
  {
    pergunta: 'E a reserva de cruzeiro, tem taxa?',
    resposta:
      'Para reservas individuais ou de casais, não há custo. Viagens em grupo têm uma taxa de planejamento, dado o volume de coordenação envolvido.',
  },
  {
    pergunta: 'Como funciona o roteiro personalizado?',
    resposta:
      'Conversamos sobre seus objetivos, estilo de viagem e orçamento, e eu monto um roteiro completo: hospedagens, transporte terrestre, seguro viagem e passeios. O valor do meu trabalho é definido conforme cada demanda.',
  },
  {
    pergunta: 'Com quanto tempo de antecedência devo te procurar?',
    resposta:
      'Quanto antes, melhor — principalmente para cruzeiros e alta temporada, onde os melhores benefícios e disponibilidade se esgotam rápido. Mas mesmo com pouco tempo, vale a pena me chamar para ver o que ainda é possível.',
  },
  {
    pergunta: 'Você atende viagens internacionais e nacionais?',
    resposta:
      'Sim, atendo os dois. Tenho vivência pessoal morando fora (Portugal e Coreia do Sul) e faço parte da rede Fora Travel, o que amplia o acesso a fornecedores e benefícios ao redor do mundo.',
  },
  {
    pergunta: 'Como eu começo?',
    resposta:
      'Preenchendo o formulário de briefing de viagem aqui no site. A partir das suas respostas, eu entro em contato para entender os detalhes e começar a desenhar sua viagem.',
  },
]
