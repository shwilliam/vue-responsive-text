# vue-responsive-text

Vue component that scales its child node in relation to its parent node's width. 
Inspired by @foisonocean's ['react-dynamic-font'](https://www.npmjs.com/package/react-dynamic-font).

## Installation
Install the package from npm by running

```
$ yarn add 'vue-responsive-text'
```

or

```
$ npm install --save 'vue-responsive-text'
```

## Usage
Import the component as you would any other and place responsive text as the component's child.

```
<template>
  <vue-responsive-text>this text will scale</vue-responsive-text>
</template>

<script>
import VueResponsiveText from 'vue-responsive-text'

export default {
  ...
  components: {
    "vue-responsive-text": VueResponsiveText
  }
};
</script>
```

[![vue-responsive-text demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zx70w1o8rp?module=%2Fsrc%2FApp.vue)