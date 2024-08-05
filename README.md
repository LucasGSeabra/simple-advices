# Simple Advice

A aplicação usa de uma api (https://api.adviceslip.com/) para pegar conselhos aleatórios.
Está funcional, mas sem formatação, e não usa de outros recursos da api como a rota de busca `GET:/advice/search/{query}`.
Definitivamente é uma aplicação fora de qualquer padrão, você tem a liberdade de implementar e refatorar.

## Available Scripts

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

## Funcionalidades

- Mostrar conselho aleatório
- Atualizar conselho exibido

## Tarefas

- [ ] Componentizar a aplicação, aplicando boas práticas de desenvolvimento
- [ ] Substituir class component por functional component (atualmente no Main.jsx)
- [ ] Possibilitar a busca de conselhos por texto
- [ ] Estilizar a aplicação (CSS modules, styled-components, tailwindcss, Bootstrap, MaterialUI, etc)

## Extras

- Utiliza TypeScript
- Implementar testes unitários
- Containerizar a aplicação