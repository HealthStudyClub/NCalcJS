# NCalcJS

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![GitHub contributors](https://img.shields.io/github/contributors/thomashambach/NCalcJS.svg)](https://github.com/thomashambach/NCalcJS/graphs/contributors) 

NCalc is a mathematical expressions evaluator in JavaScript/TypeScript. NCalc can parse any expression and evaluate the result, including static or dynamic parameters and custom functions.

## Project Description

### Installation

Get the package from npm.org by running

    npm i --s ncalcjs

or with yarn

    yarn ncalcjs

### Basic Usage

```typescript
import { Expression } from "ncalcjs"
const e = new Expression("2 + 3 * 5");
console.log(e); // 17
```

### Status

- [x] ANTLR4 Grammar
- [x] Basic math
- [ ] Math Functions
  - [x] Abs
  - [x] Acos
  - [x] Asin
  - [x] Atan
  - [ ] Atan2  
  - [x] Ceiling
  - [x] Cos
  - [x] Exp
  - [x] Floor
  - [ ] IEEEERemainder (Not in JS standard, needs custom code)
  - [x] Ln
  - [x] Log10
  - [x] Pow
  - [ ] Round (Incorrect implementation)
  - [x] Sign
  - [x] Sqrt
  - [x] Tan
  - [x] Truncate
- [ ] Standard Functions
  - [x] In
  - [x] If
  - [ ] Min
  - [ ] Max
- [ ] Custom functions
  - [x] Implementation
  - [ ] Document different API from regular NCalc
- [x] Custom parameters
  - [x] Implementation (partially done)
  - [ ] Document different API from regular NCalc
- [ ] Unit tests (partial)
- [ ] Documentation
- [ ] Usage examples
- [ ] Support older Node/JS versions
- [ ] Confirm browser support
- [ ] Resolve circular dependencies so we do not need 1 massive file. See `NCalc/Domain/index.ts`
- [ ] Improve ANTLR error handling

### Known Issues

* Not specifying a custom parameter when evaluating the expression will cause a crash.
* `Round` does not return the correct value
* Errors are not properly handled and reported.

## Building

Install all dependencies

    npm install

Before we can run our build, we need to install `ts-patch` that will change our `paths` configured in `tsconfig.json`. Note that you have to run this every time after running `npm install`.

    npm run prepare 

Build the distribution version

    npm run build

### ANTLR & Grammar

Note that the files, except for `NCalc.g4` in `/src/Grammar` are automatically generated. Any changes you wish to make there are to be made in `NCalc.g4`. You will need Java runtime installed on your system to generate these files.

To update the generated files, run

    npm run grammar

## Related projects

### [NCalc](https://github.com/ncalc/ncalc/)

NCalc C# implementation.

### [NCalc-Async](https://github.com/ncalc/ncalc-async/)

Pure asynchronous C# implementation of NCalc by [Peter Liljenberg](https://github.com/petli).

### [PanoramicData.NCalcExtensions](https://github.com/panoramicdata/PanoramicData.NCalcExtensions)

Extension functions for NCalc in C# to handle many general functions,  
including string functions, switch, if, in, typeOf, cast etc.  
Developed by David, Dan and all at [Panoramic Data](https://github.com/panoramicdata).