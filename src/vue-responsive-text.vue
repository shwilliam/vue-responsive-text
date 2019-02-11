<template>
  <span class="responsive-text-wrapper" :style="{ ...scaleStyle, ...transitionStyle }">
    <slot></slot>
  </span>
</template>

<script>
import { getNodeWidth } from "./utils.js";

export default {
  name: "VueResponsiveText",
  props: {
    transition: {
      type: Number,
      required: false,
      default: 0
    }
  },
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
    },
    transitionStyle() {
      if (this.transition) return {
        msTransition: `${this.transition}ms`,
        WebkitTransition: `${this.transition}ms`,
        OTransition: `${this.transition}ms`,
        MozTransition: `${this.transition}ms`,
        transition: `${this.transition}ms`
      }
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
.responsive-text-wrapper {
  display: inline-block;
  white-space: nowrap;

  -ms-transform-origin: left;
  -webkit-transform-origin: left;
  -o-transform-origin: left;
  -moz-transform-origin: left;
  transform-origin: left;
}
</style>
