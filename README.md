**Please note**: the project is under development

<div align="center">

![tigerspack](https://repository-images.githubusercontent.com/15434876/240f4a80-7e65-11ea-8ea4-312923547ceb)

# Tigerspack

The fastest UI framework for React

[![npm package](https://img.shields.io/npm/v/tigerspack)](https://www.npmjs.com/package/tigerspack)
[![Build Status](https://travis-ci.org/tigerspack/tigerspack.svg?branch=master)](https://travis-ci.org/tigerspack/tigerspack)
[![Coverage Status](https://coveralls.io/repos/github/tigerspack/tigerspack/badge.svg?branch=master)](https://coveralls.io/github/tigerspack/tigerspack?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/tigerspack)](https://www.npmjs.com/package/tigerspack)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=tigerspack/tigerspack)](https://dependabot.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tigerspack/tigerspack/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tigerspack/tigerspack/blob/master/CONTRIBUTING.md)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>


## Installation
Install Tigerspack using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add tigerspack
```

Or [`npm`](https://www.npmjs.com/):

```bash
npm install tigerspack
```

Note: You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

## Usage
Import the required components. For example for a button this is look like this:
```jsx harmony
import { Alert, Button } from 'tigerspack';
```
Then use it in the body of your application:

```jsx harmony
const App = () => (
  <div>
    <Alert>Press button please</Alert>
    <Button>Button name</Button>
  </div>
)
```
See the full list of components and their parameters in the  [documentation](https://tigerspack.com/docs/components/alert).
