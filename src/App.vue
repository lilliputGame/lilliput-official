<template>
  <div id="app">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
  </div>
</template>

<script>
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";
import Page4 from "./components/Page4.vue";
import Page5 from "./components/Page5.vue";

export default {
  name: "App",
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
  },
};
</script>

<style>
@font-face {
  font-family: Barlow;
  src: url("/assets/Barlow-ExtraBoldItalic.ttf");
}
@font-face {
  font-family: BalooBhaina;
  src: url("/assets/BalooBhaina-Regular.ttf");
}
#app {
  font-family: Barlow, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0 !important;
}
</style>
