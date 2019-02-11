# vue-responsive-text

![scaling text example](https://user-images.githubusercontent.com/38357771/52575730-b85ac900-2dec-11e9-9869-d70139f6fabb.gif)

> Vue component that scales its child node in relation to its parent node's width

[![vue-responsive-text demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zx70w1o8rp?module=%2Fsrc%2FApp.vue)

## Installation
Install the package from npm by running

```
$ npm i --save vue-responsive-text
```

or

```
$ yarn add vue-responsive-text
```

## Usage
Import the component as you would any other and place responsive text as the component's child.

```html
<template>
  <VueResponsiveText>
    this text will scale
  </VueResponsiveText>
</template>

<script>
import VueResponsiveText from 'vue-responsive-text'

export default {
  ...
  components: {
    VueResponsiveText
  }
};
</script>
```

## Props

|Prop      |Type   |Required|Default|Description              |
|----------|-------|--------|-------|-------------------------|
|transition|number |false   |0      |Transition duration in ms|

## Inspiration
This component was inspired by by @foisonocean's ['react-dynamic-font'](https://www.npmjs.com/package/react-dynamic-font).

## Contributing
This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/vue-responsive-text/issues). If you wish to work on this project:

1.  [Fork the project](https://github.com/shwilliam/vue-responsive-text/archive/master.zip)
2.  Create your feature branch (`git checkout -b new-feature-branch`)
3.  Commit your changes (`git commit -am 'add new feature'`)
4.  Push to the branch (`git push origin new-feature-branch`)
5.  [Submit a pull request!](https://github.com/shwilliam/vue-responsive-text/pull/new/master)
