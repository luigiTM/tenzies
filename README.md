# 🎲 Tenzies

Jogo de dados interativo onde o objetivo é rolar todos os 10 dados até que todos mostrem o mesmo número.

## 🎮 Como Jogar

1. Clique em "Rolar dados" para gerar novos valores
2. Clique nos dados para "segurar" os valores que você deseja manter (ficam verdes)
3. Continue rolando até que todos os 10 dados mostrem o mesmo número
4. Quando vencer, confetes aparecem e você pode iniciar um novo jogo!

## 🛠️ Tecnologias

- **React** 19.1.1 - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **react-confetti** - Animação de confetes ao vencer
- **nanoid** - Geração de IDs únicos para os dados
- **Google Fonts (Karla)** - Tipografia

## 🚀 Como Rodar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Visualizar build de produção
pnpm preview
```

O jogo estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── App.tsx              # Componente principal com lógica do jogo
├── components/
│   └── Die.tsx         # Componente individual do dado
├── App.css             # Estilos do App
├── index.css           # Estilos globais
└── main.tsx            # Ponto de entrada
```

## 🎯 Funcionalidades

- ✅ 10 dados aleatórios (valores de 1 a 6)
- ✅ Sistema de "segurar" dados individuais
- ✅ Detecção automática de vitória
- ✅ Animação de confetes ao vencer
- ✅ Interface em português
- ✅ Acessibilidade com ARIA labels
