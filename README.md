# Responsive Poetry Reading Website

Um site de leitura de poesia bonito, responsivo e otimizado para SEO, construído com Next.js e Tailwind CSS. 
Este projeto é baseado em um [Design do Figma](https://www.figma.com/design/iq1ZFR9C7AnZD8P3g4YsoO/Responsive-Poetry-Reading-Website) e foi recentemente migrado de Vite para o Next.js (App Router) para melhorar a Otimização para Mecanismos de Busca (SEO).

## 🚀 Funcionalidades

- **Descobrir Poemas:** Leia poemas selecionados aleatoriamente ou navegue por autores específicos.
- **Pesquisa:** Encontre poemas ou autores específicos usando a funcionalidade de busca integrada.
- **Modo Escuro/Claro:** Alternância de tema suave para uma experiência de leitura mais confortável.
- **Otimizado para SEO:** Renderização no lado do servidor (SSR) e HTML semântico utilizando o Next.js App Router.

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Biblioteca:** [React](https://react.dev/)
- **Estilização:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/) & [Material UI Icons](https://mui.com/material-ui/material-icons/)

## 📦 Como Começar

### Pré-requisitos
Certifique-se de ter o Node.js instalado (versão 18.x recomendada).

### Instalação

1. Clone o repositório e navegue até o diretório do projeto:
   ```bash
   cd poetry
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

Para criar um build otimizado para produção:
```bash
npm run build
```
Em seguida, você pode iniciar o servidor de produção:
```bash
npm run start
```

## 📂 Estrutura do Projeto

- `src/app`: Contém todas as páginas do Next.js App Router (`/`, `/search`, `/authors`, etc.).
- `src/components`: Componentes de interface (UI) reutilizáveis.
- `src/contexts`: Contextos do React (ex: Contexto de Tema).
- `src/styles`: CSS global e configurações do Tailwind.