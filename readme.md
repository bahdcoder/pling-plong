# RAINDROPS


## Introduction

PlingPlong is a simple Node Program, that takes in a number, determines if that number has prime factors, and if yes, generates a particular string, depending on the presence of 3, 5, and 7 in the prime factors of this number.

## Directory Structure 

- The PlingPlong class is found in the `pling-plong.js`
- Another class exists, which is the PrimeFactor class, found in `prime-factors.js`, and this simply takes the responsibility of generating the prime factors of any number
- Simple use cases of the class are in `index.js`
- All tests for the PlingPlong class, are in `tests/pling-plong.spec.js`
- All tests for the PrimeFactor class, are in `tests/prime-factor.spec.js`
- The `package.json` file defines one development dependency which is the `chai` library


## How to Run Project

- Clone this repository locally by running: 
```bash
    git clone https://github.com/kati-frantz/pling-plong.git
```
- Install project dependencies (devDependencies)
```bash
    npm install
```
- Run `index.js` script to see results
```bash
    node index.js
```

## Tests

- To run tests, you need to install mocha globally , or locally.
```bash
    npm i -g mocha
```
Test command: 
```bash 
    mocha
```
