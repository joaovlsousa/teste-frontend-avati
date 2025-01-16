# Projeto para Teste Frontend - AVATI

Este projeto trata-se de um teste para uma vaga de estágio na AVATI e consiste em uma tela de login funcional.

O mesmo projeto foi feito de duas formas:

1. Nativo, somente com **html, css e javascript.**
2. Com o framework **react.**

### Projeto nativo (html, css e javascript)

Para rodar localmente o projeto nativo, será importante que você utilize o Visual Studio Code (`vscode`) pois será utilizado uma extensão do mesmo para criar um servidor que possa rodar o código criado.


#### Passos para rodar o código

1. **Clonar o repositório**
```bash
git clone https://github.com/joaovlsousa/teste-frontend-avati.git
```

2. **Acessar o diretório**
```bash
cd teste-frontend-avati
```

3. **Abrir o projeto no `vscode`**
```bash
code .
```

4. **Baixar a extensão Live Server** <br />
Entre na aba de extensões no menu lateral esquerdo, ou utilize o atalho `ctrl+shift+x` e cole este id `ritwickdey.liveserver` no campo de pesquisa e clique para instalar a extensão.

5. **Rodar o projeto** <br />
Após baixar a extensão Live Server, acesse o menu inferior direito e clique na opção `Go Live`. Esta opção irá subir um servidor local para você acessar o projeto. Agora é só acessar a url [http://localhost:5500/html-css-js](http://localhost:5500/html-css-js) e visualizar o projeto.

### Projeto react

Este projeto em react foi criado com o intuito de mostrar que podemos deixar o mesmo: mais profissional, pois foi utilizado o `eslint` para deixar o código padronizado; menos favorável a erros, pois foi utilizado `typescript` para tipagem de variáveis e funções e a biblioteca `zod` para validações de campos; e moderno, tendo em vista que foi utilizado a versão mais atualizada do react (v19), o framework `tailwindcss` que é amplamente utilizado atualmente, dentre outros fatores que aprimoram o desenvolvimento de interfaces para a web.

#### Recursos necessários para rodar o projeto

1. `Node.js` na versão 18 ou superior.

#### Passos para rodar o código

1. **Clonar o repositório**
```bash
git clone https://github.com/joaovlsousa/teste-frontend-avati.git
```

2. **Acessar o projeto**
```bash
cd teste-frontend-avati/react
```

3. **Instalar os pacotes necessários**
```bash
npm install
```

4. **Rodar o projeto**
```bash
npm run dev
```

5. **Ver o projeto** <br />
Acesse a url [http://localhost:5173](http://localhost:5173) para visualizar o projeto.