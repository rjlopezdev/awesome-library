> :bulb: See [CONFIGURE_TEMPLATE.md](https://gist.github.com/rjlopezdev/f2c2ab0db522aad87c98fb1dc2e4ef14) to configure this template. Then, remove the file and this advise.

<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" alt="AwesomeLibrary" width="200" height="200">
</p>

<h1 align="center"> AwesomeLibrary </h1>

<p align="center">
  Minimal library description.
  <br>
  <br>
  <img src="https://github.com/rjlopezdev/awesome-library/workflows/Build%20Library%20and%20Schematics/badge.svg">
  <img src="https://codecov.io/gh/rjlopezdev/awesome-library/branch/master/graph/badge.svg" />
  <br>
  <br>
  <img src="https://badge.fury.io/js/awesome-library.svg">
  <img src="https://img.shields.io/badge/maintainer-rjlopezdev-orange.svg?link=https://github.com/rjlopezdev">
  <img src="https://img.shields.io/badge/license-MIT-green.svg">
  <br>
  <img src="https://img.shields.io/badge/nest%20add-compatible-green.svg">
  <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <br>
  <br>
  <a href="CONTRIBUTING.md"> Contributing </a>
  ·
  <a href="LICENSE"> License </a>
</p>

> :books: [See complete documentation](https://rjlopezdev.github.io/awesome-library/)

An exhaustive description of the library.

# :notebook: Summary

* [Installation](#installation)
* [Setup](#setup)
* [Usage](#usage)
  * [AwesomeService](#awesomeservice)
* [Schematics](#schematics)

# :package: Installation

* :cat2: Using Nest CLI:
```
nest add awesome-library
```

* :package: Using Package Manager: 
```
npm install --save awesome-library
```

# :wrench: Setup

Explain your library setup.

```typescript
import { Module } from '@nestjs/common';
import { AwesomeModule, AwesomeConfig } from 'awesome-library';

const CONFIG: AwesomeConfig = {
  value: 'Awesome!'
}

@Module({
  imports: [
    ...
    AwesomeModule.register(CONFIG)
  ],
  controllers: [ ... ],
  providers: [ ... ],
})
export class AppModule {}
```

## :control_knobs: Config

| Value | Type | Default | Description |
| --- | --- | --- | --- |
| value | __string__ | `<DEFAULT>` | A powerful value |

# :books: Usage

Explain your library usage.

## AwesomeService

A service with an awesome & helpul functionallity.

| Method | Signature | Description |
| --- | --- | --- |
printConfig | __config__: `AwesomeConfig` | Prints a provided _configuration_ |

# :art: Schematics

Invoke Schematics using:

```
nest g <schematic> [params] --collection awesome-library
```

## demo

> Prints a cute cat.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| __catType__ | _string_ | Default | Type of cat to print.
