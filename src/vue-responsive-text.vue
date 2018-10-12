<template>
  <span class="responsive-text-wrapper" :style="scaleStyle">
    <slot></slot>
  </span>
</template>

<script>
import { getNodeWidth } from "./utils.js";

export default {
  name: "VueResponsiveText",
  data() {
    return {
      scale: 1,
      currentWidth: null,
      maxWidth: null
    };
  },
  computed: {
    scaleStyle() {
      const scaleValue = `scale(${this.scale}, ${this.scale})`;

      return {
        msTransform: scaleValue,
        WebkitTransform: scaleValue,
        OTransform: scaleValue,
        MozTransform: scaleValue,
        transform: scaleValue
      };
    }
  },
  methods: {
    updateScale(currentWidth, maxWidth) {
      this.scale = maxWidth / currentWidth;
    },
    updateNodeWidth() {
      this.currentWidth = getNodeWidth(this.$el);
      this.maxWidth = getNodeWidth(this.$el.parentElement);
    }
  },
  mounted() {
    this.updateNodeWidth();
    this.updateScale(this.currentWidth, this.maxWidth);
  },
  updated() {
    this.updateNodeWidth();
    this.updateScale(this.currentWidth, this.maxWidth);
  }
};
</script>

<style scoped>
span.responsive-text-wrapper {
  display: inline-block;
  white-space: nowrap;

  -ms-transform-origin: left;
  -webkit-transform-origin: left;
  -o-transform-origin: left;
  -moz-transform-origin: left;
  transform-origin: left;

  -ms-transition: -ms-transform 500ms;
  -webkit-transition: -webkit-transform 500ms;
  -o-transition: -o-transform 500ms;
  -moz-transition: -moz-transform 500ms;
  transition: transform 500ms;
}
</style>
