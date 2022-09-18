<template>
  <div
    class="page cover"
    :style="'background-image: url(assets/page1/cover_background_01.png)'"
  >
    <div class="title-container">
      <img class="logo" src="assets/page1/cover_icon_02.png" />
      <img class="sub-title" src="assets/page1/cover_icon_01.png" />
    </div>
    <a href="assets/Lilliput.pdf"><img class="note" src="assets/page1/cover_button_01.png" /></a> 
    <img class="play-button" src="assets/page1/cover_button_02.png" />
  </div>
</template>

<script>
export default {
  name: "Page1",
  methods: {
    handleSearch() {},
  },
};
</script>
<style scoped src="../styles/page1.css">
</style>
<style scoped src="../styles/page1.mobile.css">
</style>