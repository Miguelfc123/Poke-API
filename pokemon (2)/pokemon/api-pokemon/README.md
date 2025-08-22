
# Pokédex React App Ϟ

Uma aplicação web moderna e interativa, construída com React, que consome a [PokéAPI](https://pokeapi.co/) para exibir informações detalhadas sobre Pokémon das três primeiras gerações. A interface é estilizada para ser visualmente atraente e responsiva, oferecendo uma experiência de usuário fluida e agradável.

## ✨ Funcionalidades

  - **Visualização por Geração**: Navegue facilmente entre a 1ª, 2ª e 3ª geração de Pokémon com botões dedicados.
  - **Busca Dinâmica**: Filtre os Pokémon em tempo real por nome para encontrar seu favorito rapidamente.
  - **Cards Interativos**: Cada Pokémon é exibido em um card estilizado que mostra sua imagem, nome e número na Pokédex.
  - **Modal de Detalhes**: Ao clicar em um card, um modal surge com informações adicionais, como o tipo do Pokémon, carregadas dinamicamente da API.
  - **Interface Moderna**: Um design com tema escuro, gradientes suaves e sombras que destacam os elementos, criando uma experiência imersiva.

-----

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

  - **[React.js](https://reactjs.org/)**: Biblioteca JavaScript para a construção da interface de usuário.
  - **[JavaScript (ES6+)](https://www.ecma-international.org/)**: Linguagem base para a lógica da aplicação.
  - **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)**: Utilizado para a estilização avançada, incluindo Flexbox para layouts responsivos.
  - **[PokéAPI](https://pokeapi.co/)**: API RESTful gratuita utilizada como fonte de dados para todas as informações dos Pokémon.

-----

## 🛠️ Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/) (ou Yarn) instalados.

**1. Clone o Repositório**

```bash
git clone https://[SEU-LINK-PARA-O-REPOSITORIO-AQUI].git
```

**2. Navegue até a Pasta do Projeto**

```bash
cd [NOME-DA-PASTA-DO-PROJETO]
```

**3. Instale as Dependências**

Este comando irá instalar o React e outras bibliotecas necessárias.

```bash
npm install
```

**4. Inicie o Servidor de Desenvolvimento**

A aplicação estará disponível em `http://localhost:3000` no seu navegador.

```bash
npm start
```

-----

## 🏗️ Estrutura do Código

O código-fonte principal está localizado no arquivo `App.js` e é dividido em algumas seções lógicas:

  - **Estado da Aplicação**: Utiliza os hooks `useState` e `useEffect` do React para gerenciar a lista de Pokémon, a geração selecionada, os dados do modal e o termo de busca.
  - **Busca de Dados (Fetch)**: A função `useEffect` é responsável por fazer as chamadas à PokéAPI, atualizando a lista de Pokémon sempre que a geração é alterada.
  - **Lógica do Modal**: As funções `openModal` e `closeModal` controlam a visibilidade e o carregamento dos dados detalhados de um Pokémon específico.
  - **Renderização**: O retorno do componente `App` contém o JSX que estrutura a página, incluindo o cabeçalho, a barra de busca, os botões de geração e o container que mapeia e exibe os cards dos Pokémon.

-----

## ✒️ Autor

  - **[Seu Nome]**
  - **LinkedIn:** [Link para seu perfil no LinkedIn]
  - **GitHub:** [Link para seu perfil no GitHub]
