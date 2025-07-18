<div align="center">

  <img src="./.github/assets/piloto-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>F1 Teams & Drivers API</strong></h1>
  <p align="center">
    Uma API simples para consultar equipes e pilotos de Fórmula 1, construída com <b>Node.js</b>, <b>Fastify</b> e <b>TypeScript</b>.
  </p>

</div>

<br />

## 📋 Sobre o Projeto

Este projeto disponibiliza uma API REST para consultar informações de equipes e pilotos de Fórmula 1. Ele serve como exemplo de backend moderno usando Fastify, TypeScript e boas práticas de organização de código.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [@fastify/cors](https://github.com/fastify/fastify-cors)
- [tsx](https://www.npmjs.com/package/tsx)
- [tsup](https://www.npmjs.com/package/tsup)

## 📁 Estrutura de Pastas

```
src/
  server.ts
  models/
    drives-params-model.ts
  repostories/
    f1-resposity.ts
.github/
  assets/
    blue-saiyan-bg.png
.env
.gitignore
package.json
tsconfig.json
```

## ⚡ Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor em modo desenvolvimento:
   ```bash
   npm run start:dev
   ```

3. Acesse os endpoints:
   - `GET /teams` — Lista todas as equipes
   - `GET /drives` — Lista todos os pilotos
   - `GET /drivers/:id` — Detalhes de um piloto pelo ID

## 📝 Scripts Disponíveis

- `npm run dist` — Compila os arquivos TypeScript para JavaScript na pasta dist.
- `npm run start:dev` — Executa o servidor em modo desenvolvimento.
- `npm run start:watch` — Executa o servidor com recarregamento automático.
- `npm run start:dist` — Compila e executa a versão distribuída.

## 👨‍💻 Autor

| [<img src="https://avatars3.githubusercontent.com/u/42425865?v=4" width="70" height="90" ><br><sub>Assis Pires Neto</sub>](https://github.com/lancellot) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/assis-pires-neto/)                                             |

---

[typescript]: https://www.typescriptlang.org/
[nodejs]: https://nodejs.org/
[fastify]: https://www.fastify.io/
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node
