# Reformulação ForgeFit: pacote digital + aplicativo

## Objetivo
Atualizar o site existente para comunicar duas ofertas oficiais, sem criar outro projeto:

- **Pacote Completo Digital — R$ 9,90:** reaproveita todos os entregáveis do antigo pacote completo, sem acesso ao aplicativo.
- **ForgeFit App — R$ 19,90:** aplicativo interativo, pagamento único, sem mensalidade e acesso vitalício.
- **Oferta privada — ForgeFit App por R$ 15,90:** aparece somente após o clique no pacote de R$ 9,90.

## O que será alterado

### 1. Identidade e primeira tela
- Migrar a identidade atual preto/laranja para preto, grafite, verde lima e branco.
- Refazer a primeira tela com “SEU TREINO. DO SEU JEITO.”, diferenciação breve das duas experiências e CTAs para conhecer o app e ver as opções.
- Mostrar o ForgeFit como software fitness, não como coleção de PDFs.
- Usar imagens reais do aplicativo nos mockups assim que forem enviadas; não inventar telas nem conteúdo visual.

### 2. Experiência e recursos do ForgeFit
Criar seções compactas, mobile-first, para explicar visualmente:
- montagem da semana de SEG a DOM;
- escolha de músculos, exercícios, equipamentos, ordem, séries, repetições e descanso;
- biblioteca com filtros e mais de 300 execuções explicativas dentro do app;
- recomendação inicial que pode ser personalizada;
- receitas dentro do app;
- Desafio ForgeFit de 4 dias;
- favoritos, downloads, cronograma e organização dos exercícios;
- pagamento único, sem assinatura e acesso vitalício.

### 3. Diferenciação das ofertas
- Criar “Qual experiência você prefere?” para comparar funcionalmente material digital e aplicativo.
- Manter exatamente dois cards públicos:
  - Pacote Completo Digital, R$ 9,90, com todos os entregáveis reais do antigo plano completo e aviso claro de que não inclui o app.
  - ForgeFit App, R$ 19,90, com aparência premium e lista das funções reais do aplicativo.
- Remover descontos públicos antigos, ancoragens R$ 87/R$ 197 e qualquer descrição antiga de “simples versus completo”.

### 4. Fluxo privado de R$ 15,90
- Manter a rota curta `/oferta-especial`, otimizada para celular.
- Substituir o upsell antigo por “Transforme seu pacote em um app completo por +R$ 6”.
- Comparar Pacote Digital R$ 9,90 versus ForgeFit App R$ 15,90 nesta oferta.
- Aceite: checkout promocional do app.
- Recusa: checkout do pacote digital.
- Garantir que R$ 15,90 não apareça em nenhum ponto público da página principal.

### 5. Entrega, garantia e dúvidas
- Separar claramente os processos:
  - pacote digital: manter entrega atual por e-mail/Google Drive, conforme o processo vigente;
  - app: instruções enviadas ao e-mail da compra após confirmação do pagamento.
- Atualizar a seção de acesso e reforçar a conferência do e-mail.
- Preservar a garantia de 7 dias e adaptar o texto para abranger as duas ofertas.
- Substituir o FAQ pelo conjunto atualizado sobre ForgeFit, personalização, equipamentos, execuções, receitas, desafio e recebimento.

### 6. Conversão e navegação
- Adicionar barra fixa no celular apenas para ForgeFit R$ 19,90, sem mencionar R$ 15,90.
- Fazer CTAs intermediários rolarem para a oferta correta ou abrirem o checkout correspondente.
- Preservar Meta Pixel, UTMify e a propagação dinâmica de UTMs em todas as navegações e checkouts.
- Atualizar títulos e descrições das duas páginas para a nova oferta.

## Conteúdo preservado
- Todos os entregáveis do antigo pacote completo serão mantidos no novo pacote digital de R$ 9,90.
- Depoimentos, bônus, garantia e elementos de confiança serão reaproveitados quando continuarem coerentes.
- Não serão criados novos entregáveis, resultados ou preços de concorrentes.

## Materiais recebidos
- Checkout do Pacote Completo Digital R$ 9,90: `https://pay.sunize.com.br/uIQOAFXG#643fa065-1d6d-4073-83d8-ec29dbf797c8`
- Checkout normal do ForgeFit App R$ 19,90: `https://pay.sunize.com.br/tmnfZDHS`
- Checkout promocional do ForgeFit App R$ 15,90: `https://pay.sunize.com.br/yAItIoVW`
- Três capturas reais do ForgeFit: painel, recomendação personalizada e detalhes das execuções.

Esses materiais serão usados nos mockups e nos respectivos fluxos, sem reaproveitar links antigos de forma incorreta.

## Verificação final
- Buscar no projeto inteiro preços, nomes, “Pacote Simples”, “Desafio 24 Dias” e descrições antigas.
- Testar desktop e celular, incluindo primeira tela, cards, barra fixa e página de oferta especial.
- Confirmar os três caminhos de compra e a preservação das UTMs.
- Confirmar que o preço de R$ 15,90 só aparece na oferta privada.
