<template>
  <div
    class="page partners"
    :style="'background-image: url(assets/page5/partners_background_01.png)'"
  >
    <div class="head">
      <img class="title" src="assets/page5/partners_title_01.png" />
    </div>
    <div class="body">
      <img class="audit-by" src="assets/page5/partners_title_02.png" />
      <a href="https://www.certik.com/projects/clash-of-lilliput">
        <img class="certik-logo" src="assets/page5/partners_diban_01.png" />
      </a>
    </div>
    <div class="fotter">
      <a href="https://twitter.com/LilliputGames"
        ><img class="social-logo" src="assets/page5/partners_logo_01.png"
      /></a>
      <a href="https://medium.com/@LilliputGames"
        ><img class="social-logo" src="assets/page5/partners_logo_02.png"
      /></a>
      <a href="https://discord.gg/m8DgVZMchJ">
        <img class="social-logo" src="assets/page5/partners_logo_03.png"
      /></a>
      <a href="https://t.me/LilliputGames">
        <img class="social-logo" src="assets/page5/partners_logo_04.png"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page5",
  props: {
    msg: String,
  },
};
</script>
<style scoped src="../styles/page5.css">
</style>
<style scoped src="../styles/page5.mobile.css">
</style>
