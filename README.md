# react-stage

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Dependency Status](https://img.shields.io/david/m31271n/react-stage.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/react-stage.svg)](#)
[![Travis Build Status](https://img.shields.io/travis/m31271n/react-stage.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/@m31271n/react-stage.svg)](#)

> Stage for HTML5 application.

## Install

```
$ npm install @m31271n/react-stage
```

## Usage

```jsx
import React from 'react';
import { StageToggle, Stage } from '@m31271n/react-stage';

class App extends React.Component {
  render() {
    return (
      <StageToggle condition={true}>
        <Stage>Hello, World.</Stage>
      </StageToggle>
    );
  }
}
```

## Available Props

### `StageToggle`

| props       | values           | description          |
| ----------- | ---------------- | -------------------- |
| `condition` | `true` / `false` | render stage or not. |

### `Stage`

None.
