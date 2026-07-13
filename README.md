# Site da Marcella Rech — Travel Advisor

Este documento explica, em português simples, como usar e manter este site. Você não precisa saber programar para seguir os passos abaixo.

## O que é este site

Uma página única (você rola para baixo e vê tudo) com as seções: início, serviços, sobre mim, formulário de briefing, perguntas frequentes e rodapé. O objetivo principal é fazer a pessoa preencher o formulário de briefing.

---

## 1. Como rodar o projeto no seu computador

Você só precisa fazer isso se quiser ver o site rodando no seu próprio computador antes de publicar, ou se for pedir para outra pessoa (ou para o Claude) mexer no código depois.

**Pré-requisito:** ter o Node.js instalado. Se você não tem, baixe em [nodejs.org](https://nodejs.org) (escolha a versão "LTS") e instale como qualquer outro programa.

Depois, abra o Terminal, entre na pasta do projeto e rode:

```
npm install
```

(isso só precisa ser feito uma vez, ou toda vez que alguém adicionar uma nova peça ao projeto)

Depois, para ver o site funcionando:

```
npm run dev
```

Vai aparecer um endereço tipo `http://localhost:5173` — abra esse endereço no navegador.

---

## 2. Onde trocar a imagem de fundo do hero (a primeira seção)

A primeira seção já está usando sua foto real (`src/assets/hero-bg.jpg`), com o texto ancorado na parte de baixo para não cobrir seu rosto.

Se um dia você quiser trocar por outra foto:

1. Coloque o novo arquivo dentro da pasta `src/assets/`, substituindo o `hero-bg.jpg` (ou com outro nome).
2. Se usar outro nome de arquivo, abra `src/components/Hero.tsx` e troque o nome no `import heroBg from '../assets/hero-bg.jpg'` no topo do arquivo.
3. Se a nova foto tiver o rosto/assunto principal em outra posição, você pode ajustar `backgroundPosition: 'center 15%'` (no mesmo arquivo) — o número (`15%`) controla se a foto aparece mais "de cima" ou mais "de baixo" dentro da seção.

Se preferir, peça para o Claude fazer essa troca por você — é só falar "troque o placeholder do hero pela foto que salvei em src/assets/hero-bg.jpg".

---

## 3. O formulário de briefing (agora em etapas) e a imagem ao lado dele

O formulário de briefing virou um "wizard" de 4 etapas (perguntas em blocos, uma de cada vez), parecido com aqueles formulários de onboarding de apps modernos. Isso deixa o preenchimento menos cansativo do que uma lista enorme de campos de uma vez só.

Ao lado do formulário (coluna da esquerda no computador, banner no topo no celular) já está a foto real da vista aérea do avião sobre as águas turquesa (`src/assets/briefing-bg.png`).

Se um dia você quiser trocar por outra foto:

1. Coloque o novo arquivo dentro da pasta `src/assets/`, substituindo o `briefing-bg.png` (ou com outro nome).
2. Se usar outro nome de arquivo, abra `src/components/BriefingForm.tsx` e troque o nome no `import briefingBg from '../assets/briefing-bg.png'` perto do topo do arquivo.

Se preferir, peça para o Claude fazer essa troca por você.

As perguntas de cada etapa (motivos de viagem, estilos, tipos de ajuda, alergias, etc.) ficam em `src/data/briefingOptions.ts` — para adicionar ou remover uma opção de uma lista, edite esse arquivo do mesmo jeito que o FAQ (seção 6 abaixo).

---

## 4. Como conseguir e colocar a chave do Web3Forms (para o formulário funcionar)

O formulário de briefing usa um serviço gratuito chamado **Web3Forms**, que recebe as respostas (de todas as 4 etapas, em um único envio no final) e te envia por e-mail. Sem essa chave, o formulário não envia nada.

Passo a passo:

1. Acesse [web3forms.com](https://web3forms.com).
2. Digite o seu e-mail (o e-mail onde você quer receber os briefings) e clique para criar a chave de acesso ("Access Key").
3. Você vai receber um código (algo como `a1b2c3d4-...`). Copie esse código.
4. Abra o arquivo `src/data/siteConfig.ts`.
5. Troque o texto `'SUBSTITUIR-PELA-MINHA-ACCESS-KEY'` pelo código que você copiou, mantendo as aspas. Fica assim, por exemplo:
   ```
   export const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
   ```
6. Salve o arquivo. Pronto — o formulário já vai enviar de verdade.

---

## 5. Onde adicionar as fontes pagas no futuro (Chiswick Sans Text e Blanco)

Hoje o site usa duas fontes gratuitas do Google (Bricolage Grotesque para os títulos, Newsreader para os textos), parecidas com as fontes pagas que você pediu originalmente.

Quando você comprar as licenças de **Chiswick Sans Text** e **Blanco**:

1. Coloque os arquivos das fontes (geralmente `.woff2` ou `.otf`) dentro de uma pasta nova: `src/assets/fonts/`.
2. Abra o arquivo `src/index.css`.
3. Logo abaixo do comentário que explica a troca de fontes, adicione algo assim (um bloco por fonte):
   ```
   @font-face {
     font-family: 'Chiswick Sans Text';
     src: url('./assets/fonts/chiswick-sans-text.woff2') format('woff2');
     font-weight: 600 700;
   }
   ```
4. Depois, troque só estas duas linhas (mais acima no mesmo arquivo):
   ```
   --font-heading: 'Chiswick Sans Text', sans-serif;
   --font-body: 'Blanco', serif;
   ```

Nenhum outro arquivo precisa ser tocado — todo o site já está preparado para usar essas variáveis.

---

## 6. Como adicionar ou editar perguntas do FAQ

Abra o arquivo `src/data/faqs.ts`. Você vai ver uma lista de perguntas e respostas assim:

```
{
  pergunta: 'Como eu começo?',
  resposta: 'Preenchendo o formulário de briefing...',
},
```

Para adicionar uma pergunta nova, copie um desses blocos inteiros (do `{` até o `},`), cole antes do último `]` do arquivo, e troque o texto de `pergunta` e `resposta`. Para editar uma pergunta existente, só troque o texto entre aspas.

O mesmo vale para os textos de serviços (`src/data/services.ts`) e para nome/redes sociais (`src/data/siteConfig.ts`).

---

## 7. Como publicar o site (deploy)

Recomendo a **Vercel**, que é gratuita e simples. Passo a passo:

1. Coloque este projeto em um repositório no GitHub (se ainda não tiver, crie uma conta grátis em [github.com](https://github.com), crie um repositório novo, e suba os arquivos do projeto para lá — o Claude pode te ajudar com isso).
2. Acesse [vercel.com](https://vercel.com) e crie uma conta (dá para entrar direto com sua conta do GitHub).
3. Clique em "Add New" → "Project".
4. Escolha o repositório do site que você acabou de subir.
5. A Vercel já reconhece automaticamente que é um projeto Vite — não precisa mudar nenhuma configuração. Clique em "Deploy".
6. Em poucos minutos, você recebe um link (algo como `seu-site.vercel.app`) com o site no ar.
7. Depois, se quiser usar seu próprio domínio (ex: `marcellarech.com.br`), vá em "Settings" → "Domains" dentro do projeto na Vercel e siga as instruções.

Se preferir usar a **Netlify** em vez da Vercel, o caminho é parecido: crie conta em [netlify.com](https://netlify.com), conecte o repositório do GitHub, e quando pedir o "comando de build" use `npm run build` e a "pasta de saída" (publish directory) use `dist`.

---

## Checklist rápido antes de divulgar o site

- [x] Foto real do hero aplicada em `src/assets/hero-bg.jpg`
- [x] Foto real ao lado do formulário de briefing aplicada em `src/assets/briefing-bg.png`
- [ ] Coloquei a chave do Web3Forms em `src/data/siteConfig.ts` (seção 4)
- [ ] Testei o formulário de briefing (as 4 etapas) preenchendo e enviando de verdade
- [ ] Troquei os links placeholder de Instagram e WhatsApp em `src/data/siteConfig.ts` pelos links reais
