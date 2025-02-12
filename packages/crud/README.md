<div align="center">
  <h1>CRUD (@datafas/crud)</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>

<br />

<div align="center">
  <a href="https://travis-ci.org/4Digital-LLC/dataui-nestjs-crud">
    <img src="https://github.com/4Digital-LLC/dataui-nestjs-crud/workflows/Tests/badge.svg" alt="Build" />
  </a>
  <a href="https://coveralls.io/github/4Digital-LLC/dataui-nestjs-crud?branch=master">
    <img src="https://coveralls.io/repos/github/4Digital-LLC/dataui-nestjs-crud/badge.svg" alt="Coverage" />
  </a>
  <a href="https://github.com/4Digital-LLC/dataui-nestjs-crud/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/4Digital-LLC/dataui-nestjs-crud.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@datafas/crud">
    <img src="https://img.shields.io/npm/v/@datafas/crud.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/org/nestjsx">
    <img src="https://img.shields.io/npm/dm/@datafas/crud.svg" alt="npm downloads" />
  </a>
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="Renovate" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
  </a>
  <a href="https://github.com/marmelab/awesome-rest#nodejs">
    <img src="https://raw.githubusercontent.com/4Digital-LLC/dataui-nestjs-crud/master/img/awesome-rest.svg?sanitize=true" alt="Awesome REST" />
  </a>
  <a href="https://github.com/juliandavidmr/awesome-nestjs#components--libraries">
    <img src="https://raw.githubusercontent.com/4Digital-LLC/dataui-nestjs-crud/master/img/awesome-nest.svg?sanitize=true" alt="Awesome Nest" />
  </a>
  <a href="https://github.com/nestjs/nest">
    <img src="https://raw.githubusercontent.com/4Digital-LLC/dataui-nestjs-crud/master/img/nest-powered.svg?sanitize=true" alt="Nest Powered" />
  </a>
</div>

<div align="center">
  <sub>Built by
  <a href="https://twitter.com/MichaelYali">@MichaelYali</a> and
  <a href="https://github.com/4Digital-LLC/dataui-nestjs-crud/graphs/contributors">
    Contributors
  </a>
</div>

<br />

We believe that everyone who's working with NestJs and building some RESTful services and especially some CRUD functionality will find `@datafas/crud` microframework very useful.

## Features

<img align="right" src="https://raw.githubusercontent.com/4Digital-LLC/dataui-nestjs-crud/master/img/crud-usage2.png" alt="CRUD usage" />

- Super easy to install and start using the full-featured controllers and services :point_right:

- DB and service agnostic extendable CRUD controllers

- Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- Framework agnostic package with query builder for a frontend usage

- Query, path params and DTOs validation included

- Overriding controller methods with ease

- Tiny config (including globally)

- Additional helper decorators

- Swagger documentation

## Install

```shell
npm i @datafas/crud class-transformer class-validator
```

## Packages

- [**@datafas/crud**](https://www.npmjs.com/package/@datafas/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators ([docs](https://4Digital-LLC.github.io/dataui-nestjs-crud/controllers/#description))
- [**@datafas/crud-request**](https://www.npmjs.com/package/@datafas/crud-request) - request builder/parser package which provides `RequestQueryBuilder` class for a frontend usage and `RequestQueryParser` that is being used internally for handling and validating query/path params on a backend side ([docs](https://4Digital-LLC.github.io/dataui-nestjs-crud/requests/#frontend-usage))
- [**@datafas/crud-typeorm**](https://www.npmjs.com/package/@datafas/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudService` with methods for CRUD database operations ([docs](https://4Digital-LLC.github.io/dataui-nestjs-crud/service-typeorm/))

## Documentation

- [General Information](https://4Digital-LLC.github.io/dataui-nestjs-crud/)
- [CRUD Controllers](https://4Digital-LLC.github.io/dataui-nestjs-crud/controllers/#description)
- [CRUD ORM Services](https://4Digital-LLC.github.io/dataui-nestjs-crud/services/)
- [Handling Requests](https://4Digital-LLC.github.io/dataui-nestjs-crud/requests/#description)

## Support

Any support is welcome. At least you can give us a star.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/dataui/crud/graphs/contributors"><img src="https://opencollective.com/nestjsx/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

#### Organizations

Currently this project is NOT sponsored by anybody. Get in touch if you want to become a sponsor.

## License

[MIT](LICENSE)
