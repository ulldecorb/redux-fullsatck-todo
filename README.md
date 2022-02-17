# test-cheat-test
Javascript unit test cheat sheet
## Table of Content
[Jest](#jest)
  * [Install](#install)
[Sources](#sources)
## JEST
### Install
>Create package.json
```bash
$ npm init -y
```
>Install Jest library for javascript project
```bash
$ npm i -D jest
```
>Create jest.config.js
```bash
npx jest --init
```
```bash
? Would you like to use Jest when running "test" script in "package.json"? » (y/N) yes   
? Would you like to use Typescript for the configuration file? » (y/N)  yes
? Choose the test environment that will be used for testing » node / jsdom (browser-like)
? Do you want Jest to add coverage reports? » (y/N) yes  »  v8 / babel
? Automatically clear mock calls, instances and results before every test? » (y/N) yes
```
>Install Jest library for typescript project
```bash
$ npm i -D jest ts-jest @types/jest
$ npx ts-jest config:init
```



## Sources

[Carlos Azaustre's video tutorial](https://www.youtube.com/watch?v=I27ZJU2_-Og)   
[Bromix's article about typescript install](https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421)
