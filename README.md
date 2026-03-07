This is a [Next.js] project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## About the project

It is a base repository, an empty table to starting building new applications from it. Comes with:

## Create-next-app

Configurated Typescript;
Configurated Next, React and React-DOM;
Configurated ESLint;
Configurated Tailwind CSS;
Configurated APP Router;

## My personal configurations

Configurated Prettier;
Confiigurated Jest;
Configurated cz-git;
Configurated commitlint;
Configurated CI with Github Actions;

## PARTE ESSENCIAL

Para rodar o sistema de usuário e senha, faça o seguinte:
npm run docker:down
Isso limpa o banco de dados, se ele já existir.
npm run docker:up
Isso sobe o banco de dados.
Cria outro terminal e roda o comando:
npm run migrate:up
Isso cria a tabela `users` no banco de dados.
npm run dev
Do lado do botão terminal, tá escrito portas. Clica na porta 3000. Isso vai te redirecionar pro site.
Coloca qualquer email que termina com @gmail.com
A senha deve ter letra maiúscula, 8 dígitos e algum símbolo.
Depois, pra consultar se o usuário foi cadastrado:
Digita em um terminal:
npm run docker:enter
Isso entra no banco de dados.
SELECT \* FROM users
Vai selecionar tudo da tabela users.
O usuário que você cadastrou deve aparecer lá.
Só isso 😘
