# COMP Website

Este é o projeto oficial do **site da COMP**.

---

## **Tecnologias Utilizadas**

Este projeto utiliza as seguintes tecnologias:

- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white) **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- ![React Router](https://img.shields.io/badge/React%20Router-7.1.0-CA4245?style=flat&logo=react-router&logoColor=white) **React Router Dom** - Gerenciamento de rotas no React.
- ![MUI](https://img.shields.io/badge/MUI-6.2.1-007FFF?style=flat&logo=mui&logoColor=white) **MUI** - Componentes de UI pré-estilizados.
  - ![@emotion/react](https://img.shields.io/badge/Emotion-11.14.0-FF69B4?style=flat&logo=emotion) **Emotion** - Biblioteca de estilização para MUI.
  - ![@mui/icons-material](https://img.shields.io/badge/MUI%20Icons-6.2.1-007FFF?style=flat&logo=mui) **MUI Icons** - Ícones pré-definidos do MUI.
- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-%20v3.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white) **Tailwind CSS** - Framework de estilização utilitário.

---

## **Como Executar o Projeto**

Siga os passos abaixo para rodar o projeto localmente:

### **1. Clone o repositório:**

```bash
git clone https://github.com/EJ-ICEI-PUC-Minas/comp-website
```

### **2. Entre no diretório do projeto:**

```bash
cd comp-website
```

### **3. Instale as dependências:**

```bash
npm install
```

### **4. Execute o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse o projeto no navegador através do link exibido no terminal (geralmente <http://localhost:5173>).

---

## 📂 Estrutura de Diretórios

Recomendamos que o seguinte padrão de estrutura de diretórios seja seguido:

```bash
comp-website/
├── src/
│   ├── assets/          # Imagens, fontes e outros recursos estáticos.
│   ├── components/      # Componentes reutilizáveis (ex: Header).
│   ├── pages/           # Páginas do site (ex: Home, About, Team).
│   ├── index.css        # Estilos globais.
│   └── main.jsx         # Ponto de entrada principal.
├── .prettierrc          # Configuração do Prettier.
├── tailwind.config.js   # Configuração do Tailwind CSS.
├── vite.config.js       # Configuração do Vite (build).
└── package.json         # Dependências e scripts.

```

- src/components: Contém componentes reutilizáveis como o Header.
- src/pages: Contém as páginas principais do site (Home, About, Team).
- Tailwind Config: Configurações personalizadas para estilização do projeto.

---

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run format`: Aplica o Prettier para formatar o código.
