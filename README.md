## Books App

> Desafio Técnico South System, para a criação de uma aplicativo em React Native consumindo
> a Api do Google Books (https://developers.google.com/books/)

### Aplicação

Disponível via Expo em:

> https://expo.io/@guilherme145/projects/app-books

### Arquitetura

> - React Native
> - Expo
> - Typescript
> - Context Api
> - React Navigation
> - Functional Components e Hooks
> - Axios
> - Eslint e Prettier
> - Magnus Ui (https://magnus-ui.com/) para alguns componentes
> - Modalize (https://github.com/jeremybarbet/react-native-modalize)

### Preview
<p align="center">
  <img src="https://media2.giphy.com/media/0xxZaAqu2way95bMuy/giphy.gif" alt="gif" />
</p>

### Instalação Local

#### Pré requisitos

- Node e Expo Cli

Após clonar o repositório, dentro da pasta do projeto execute:

```sh
# Através do yarn
yarn install
yarn start

# Ou com npm
npm install
npm start
```

### Testes

Execute: `npm test` ou `yarn test`. A pasta dentro de `src/__tests__` possui os testes principais da aplicação.

### Pontos importantes

- **Testes:** Os testes devem cobrir mais componentes e funcionalidades, porém devido ao tempo e ao conhecimento ainda
  limitado na biblioteca de testes, foi realizado apenas alguns testes unitários. Como melhoria, os testes podem ser
  feitos em maior número e com melhor finalidade, seguindo os requisitos funcionais.

- **Informações da Api:** A fim de melhorar a performace, foi limitado os campos retornados da api, pelo atributo 
  "fields", conforme descrito na documentação. Como melhoria, pode-se também aproveitar mais certas informações vindas
  da api, fazendo uso de tags, categorias, faixa etária, disponibilidade, opções de compra entre outros.

- **Typescript:** Não foram utilizadas todas tipagens e padrões de código do typescript devido ao tempo.

- **Context Api e Hooks:** Escolhi trabalhar com Context dada a simplicidade das funcionalidades no app, que não exigiam
  rigoroso controle de estados ou de manter informação sobre as ações. Redux e outras metodologias são excelentes mas
  aqui não fariam muita diferença.

- **Favoritos:** A funcionalidade de favoritos foi construída salvando os livros no próprio dispositivo via
  AsyncStorage. Em uma melhoria futura, pode-se aproveitar a autenticação OAuth2 Google para salvar esses favoritos na
  conta do usuário.