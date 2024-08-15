# {KONKE} Bank - banco comunitário para comunidades quilombolas

# Banco comunitário para comunidades Quilombolas

Tem como objetivo criar um banco comunitário para comunidades quilombolas. Este banco oferecerá serviços financeiros tradicionais juntamente com incentivos adicionais através de uma moeda social circulante local.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Implementação de Conta


## Objetivos de aprendizagem do desafio 🎯
- Entender como o TypeScript, uma linguagem de programação superset de JavaScript, se integra naturalmente ao ecossistema do Node.js e NESTjs
- Compreender os princípios e características de uma arquitetura RESTful.
- Identificar os recursos, URIs, métodos HTTP e códigos de status comuns em uma API REST.
- Aprender a projetar e implementar uma API RESTful usando Node.js e NESTjs, seguindo as melhores práticas de REST.

## Desafio 02 - {Reprograma}Bank
 
Abaixo estão os requisitos:
* Cada cliente do banco tem as seguintes informações:
  - Nome completo
  - Número de identificação (ID)
  - Endereço = classe Endereco
  - Número de telefone

* Requisitos de negócio:
  - Cada cliente pode ter uma ou mais contas bancárias.  
  - As contas podem ser do tipo Conta Corrente ou Conta Poupança.
  - Para a conta corrente, armazenar o limite do cheque especial.
  - Para a conta poupança, é armazenar a taxa de juros.
  - As Contas podem fazer tranferencia e saque deposito 

### Projeto Inicial 
- Criei as classe Cliente e Classe Conta  e vinculei a conta ao id do cliente
- Criei interfaces para cada transações separadamente, crie classes de saque e depósito implementando os comportamentos dependendo do tipo de conta, cada comportamento foi atribuido a classe conta.
- Crieis as derivadas da Classe Conta( poupança e corrente), 
- Implementei a transferencia nas classes

## Desafio 03 - {Reprograma}Bank

Abaixo estão os requisitos:
Ao cliente do banco ser adicionadas as seguintes informações:
- Contas
- Gerente
Gerente deve ter as seguintes informações:
- Nome completo
- Número de identificação (ID)
- Clientes
Requisitos de negócio:
- Criar classes para representar Cliente e Gerente, incluindo os atributos mencionados no diagrama.
- Implementar métodos nas classes Cliente e Gerente para abrir, fechar e modificar o tipo de conta.
- Atualizar a classe Conta para manter uma referência ao cliente associado a ela.
- Implementar métodos na classe Gerente para adicionar e remover clientes, bem como para abrir, fechar e modificar o tipo de conta para um determinado cliente.
- Organizar a estrutura do projeto de forma apropriada, seguindo as melhores práticas para uma API RESTful.

## Desafio 04 - {Reprograma}Bank

- Explorar práticas recomendadas para criar um design de código claro e eficiente
- Aplicar SOLID, DRY e KISS
- Implementei padrões de código PD_Factory, PD_Adapter,
- Identificando como os padrões de design influenciam a estrutura e organização de um sistema.
- Refatoração do código

## Desafio 05 - {Reprograma}Bank

- Ficou explícito durante a semana o quanto a formulação de testes e o TDD são essenciais na construção de código
- Escrevi testes unitários para todas as classes de Contas Service e Contas Factory 
- Criei testes de integração para a API, verificando a interação dos endpoints (POST)de Contas e de Cliente, utilizando supertest.
- Ajuste de BUG após teste, refatorando o código pra que um cliente não tenha mais de 1 conta do mesmo tipo 
Identificação do erro
![Captura de tela 2024-08-09 155738](https://github.com/user-attachments/assets/1718135b-7507-4704-9915-192670e67995)

Após correção, com um código que deveria falhar
![Captura de tela 2024-08-09 170710](https://github.com/user-attachments/assets/f6c67b7e-3978-4523-8caf-d9931c413cd9)

![Captura de tela 2024-08-09 215134](https://github.com/user-attachments/assets/6df8e0c4-b8bd-4164-b8b4-e188de2e9c28)

- Utilizei do TDD para implementar funcionalidade novas com saque, deposito e atualização de saldo no service

![Captura de tela 2024-08-09 215330](https://github.com/user-attachments/assets/63a3c046-760d-48bb-bf5e-ae3415e68c89)

### Working in progess
  - Escrever testes unitários para todas as classes criadas até agora (Cliente, Gerente, Conta, ContaCorrente, ContaPoupanca)
  - Desenvolver testes end-to-end para garantir que o fluxo completo do usuário funcione corretamente (exemplo: criação de cliente, abertura de conta, realização de transferência).

## Desafio 06 - {Reprograma}Bank

