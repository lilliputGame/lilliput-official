<template>
  <div class="page setting"
   :style="'background-image: url(assets/page3/setting_backgrpund_01.png)'"
  >
    <div class="head">
      <img class="title" src="assets/page3/setting_title_01.png" />
    </div>
    <div class="body">
      <div class="video-player">
        <video
          class="video-source"
          :src="videoList[videoIndex].src"
          autoplay
          muted
          loop
        ></video>
        <div class="video-cover"
         :style="'background-image: url(assets/page3/setting_tv_01.png)'"
        ></div>
      </div>
      <img class="bee" src="assets/page3/setting_icon_01.png" />

      <div class="video-list"
      :style="'background-image: url(assets/page3/setting_diban_01.png)'"
      >
        <img
          class="video-list-header"
          src="assets/page3/setting_title_02.png"
        />
        <div
          :class="['video-item', videoIndex == index ? 'active' : '']"
          v-for="(item, index) in videoList"
          :key="index"
          @click="videoIndex = index"
        >
          <img
            class="arrow left"
            v-show="videoIndex == index"
            src="assets/page3/setting_icon_02.png"
          />
          <div class="title">{{ item.title }}</div>
          <img
            class="arrow right"
            v-show="videoIndex == index"
            src="assets/page3/setting_icon_03.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page3",
  data() {
    return {
      videoIndex: 0,
      videoList: [
        {
          title: "Battle & Explore",
          src: "assets/page3/video/video01.mp4",
        },
        {
          title: "Collection",
          src: "assets/page3/video/video02.mp4",
        },
        {
          title: "Building Upgrade",
          src: "assets/page3/video/video03.mp4",
        },
      ],
    };
  },
};
</script>
<style scoped src="../styles/page3.css">
</style>
<style scoped src="../styles/page3.mobile.css">
</style>
