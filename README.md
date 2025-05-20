# SAC UOL Redesign

Projeto de redesign do SAC UOL utilizando React, Vite e TypeScript, com foco em responsividade, identidade visual moderna e experiência do usuário aprimorada.

## Tecnologias Utilizadas
- **React** (com TypeScript)
- **Vite** (build e dev server)
- **CSS Modules** e CSS customizado
- **Context API** para gerenciamento de estado
- **Material Icons** (Google Fonts)
- **Git/GitHub** para versionamento

## Estrutura do Projeto
```
Sac-Uol-Redesign/
├── public/
├── src/
│   ├── components/
│   │   ├── UolBar/           # Barra superior preta (menu)
│   │   ├── Header/           # Cabeçalho e logo
│   │   ├── HeroBanner/       # Banner principal
│   │   ├── QuickActions/     # Ações rápidas
│   │   ├── HelpSearch/       # Busca e FAQ
│   │   ├── Products/         # Navegação de produtos
│   │   ├── AppDownload/      # Banner de download do app
│   │   ├── Contact/          # Seção de contato
│   │   ├── FooterLinks/      # Links do rodapé (expansível)
│   │   └── Footer/           # Rodapé final
│   ├── context/              # Context API
│   ├── App.tsx               # Composição principal
│   └── App.css               # Estilos globais
├── package.json
├── tsconfig.json
└── README.md
```

## Passo a Passo para Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/KaiqueBorgesdeOliveira/Sac-Uol-Redesign.git
   cd Sac-Uol-Redesign
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O Vite irá iniciar o servidor local. Acesse o endereço exibido no terminal (geralmente http://localhost:5173).

4. **Build para produção:**
   ```bash
   npm run build
   # ou
   yarn build
   ```

5. **Preview do build:**
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

## Funcionalidades e Customizações
- Layout responsivo (desktop, tablet, mobile)
- Barra superior preta (UolBar) com menu hambúrguer e ícones
- Seções alinhadas e espaçamento ajustado conforme identidade visual
- Botão "Mais informações" que expande/recolhe links do rodapé
- FAQ e navegação de produtos com carrossel
- Banner de download do app com QR Code
- Seção de contato com botões de WhatsApp e chat
- Utilização de variáveis CSS para cores e espaçamentos

## Como contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature/fix: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m "feat: minha feature"`
4. Push para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request

---

Para dúvidas ou sugestões, abra uma issue no repositório!
