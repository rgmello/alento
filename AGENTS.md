# Agent Guidelines & Project Context

Este documento serve como guia para agentes de IA e desenvolvedores trabalhando neste repositório.

## Contexto do Projeto
O projeto é um "Responsive Poetry Reading Website", originalmente construído como uma Single Page Application (SPA) com Vite e React, e posteriormente migrado para o Next.js (App Router) com o objetivo de melhorar o SEO e a performance.

## Stack Tecnológica
- **Framework:** Next.js `13.4.19` (App Router)
- **UI Library:** React `18.3.1`
- **Estilização:** Tailwind CSS `v3.4.17` e PostCSS `v8.4.49`
- **Package Manager:** `npm` (embora existam resquícios de `pnpm` nos arquivos de lock)

## Decisões e Restrições Importantes
1. **Versão do Node.js:** O ambiente local do usuário roda Node `v18.12.1`. Por conta disso, fizemos o downgrade do Next.js para a versão `13.4.x`, garantindo a compatibilidade.
2. **Hidratação (Hydration):** Evite renderizar conteúdos randômicos (como `getRandomPoem()`) diretamente no servidor, pois isso causa erros de "Hydration Mismatch" (diferença entre o HTML gerado no servidor e o do cliente). O padrão adotado é usar `useEffect` para carregar dados randômicos estritamente no Client-Side.
3. **Tailwind e CSS:** 
   - Houve problemas ao usar o Tailwind v4, portanto estamos restritos à v3.
   - O PostCSS falhou ao tentar processar a diretiva `@layer base` em arquivos separados sem o `@tailwind base` no mesmo contexto. A solução adotada foi consolidar todas as variáveis CSS, diretivas de tema (`.dark`) e imports do Tailwind dentro de um único arquivo: `src/styles/index.css`.
   - **Atenção:** Classes customizadas nas diretivas `@apply` com opacidade em formato fracionado (ex: `outline-ring/50`) geram erro no PostCSS com variáveis CSS complexas como as do projeto (`oklch`). Evite usar a sintaxe `/opacity` nessas variáveis.

## Estrutura de Rotas (App Router)
- `/`: Home page (apresenta um poema aleatório)
- `/search`: Página de pesquisa de poemas
- `/authors`: Lista de autores
- `/author/[author]`: Detalhes de um autor específico
- `/poem/[id]`: Leitura de um poema específico