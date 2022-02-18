# test-cheat-test
Javascript unit test cheat sheet
## Table of Content
[Unit Test](#unit-test)
  * [Jest](#jest)
  * [React Testing Library](#react-testing-library)  

[End to End Test \(E2E)](#end-to-end-test)
[Cypress](#cypress)
[Sources](#sources)

---
## Unit Test
---
## Jest
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
? Choose the test environment that will be used for testing » node / jsdom (browser-like)  node
? Do you want Jest to add coverage reports? » (y/N) yes  »  v8 / babel   v8
? Automatically clear mock calls, instances and results before every test? » (y/N) yes
```
>Install Jest library for typescript project
```bash
$ npm i -D jest ts-jest @types/jest
$ npx ts-jest config:init
```
>Do function test
```javascript
import { fizzbuzz } from './fizzbuzz.js'

test('test function', () => {
  const expected = 'fizz';
  const result = fizzbuzz(3);
  expect(expected).toBe(result)
};);
```

## React Testing Library 
```bash
npm i --save-dev @testing-library/react @testing-library/jest-dom
```

```bash
npm i --save-dev @testing-library/jest-dom
```
```javascript
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { Component } from './index'

describe('component', () => {
  test('render content', () => {
    const mockProps = {
      firstProp: 'prop value',
      secondProp: true
    }
    
    const component = render(<Component props={ mockProps } />);
        
    component.getByText('This is a test);
    
    expect(component.container).toHaveTextContent(/text/i)
  }
}
```   
>.toHaveTextContent(/text/i)
>console.log(prettyDOM(element))
```javascript
const element = component.container.querySelector('li');
console.log(prettyDOM(element));
```






## End to End Test
## Cypress
```bash
npm install cypress -D    
```



## Sources

[Carlos Azaustre's video tutorial](https://www.youtube.com/watch?v=I27ZJU2_-Og)   
[Bromix's article about typescript install](https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421)
