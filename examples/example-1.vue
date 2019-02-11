<template>
  <div>
    <div :style="{ width: textWrapperWidth + '%', border: '1px solid #222', padding: '50px', marginBottom: '40px' }">
      <VueResponsiveText :transition="transitionDuration">
        {{ inputText }}
      </VueResponsiveText>
    </div>

    <div class="settings">
      <input type="text" v-model="inputText">
      <label>
        div width:
        <input type="range" min="20" max="100" 
          v-model="textWrapperWidth"
        />
      </label>
      <label>
        transition (ms):
        <input type="number" v-model="transitionDuration">
      </label>
    </div>
  </div>
</template>

<script>
import VueResponsiveText from "../src/vue-responsive-text.vue";

export default {
  name: "Example1",
  data() {
    return {
      textWrapperWidth: 50,
      transitionDuration: 100,
      inputText: "this text will scale"
    };
  },
  components: {
    VueResponsiveText
  }
};
</script>

<style scoped>
.settings > * {
  display: block;
  line-height: 30px;
}
</style>
