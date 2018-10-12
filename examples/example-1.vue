<template>
  <div>
    <div :style="{ width: textWrapperWidth + '%', backgroundColor: 'lightBlue', padding: '50px 0' }">
      <VueResponsiveText>
        {{ inputText }}
      </VueResponsiveText>
    </div>
    
    <input type="text" v-model="inputText">
    <input type="range" min="20" max="100" 
      v-model="textWrapperWidth"
    />
  </div>
</template>

<script>
import VueResponsiveText from "../src/vue-responsive-text.vue";

export default {
  name: "Example1",
  data() {
    return {
      textWrapperWidth: 50,
      inputText: "this text will scale"
    };
  },
  components: {
    VueResponsiveText
  }
};
</script>
