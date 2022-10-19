<template>
  <div
    class="page success"
    :style="'background-image: url(assets/page4/success_background_01.png)'"
  >
    <div class="head">
      <img class="title" src="assets/page4/success_title_01.png" />
    </div>
    <div class="body">
      <div class="road-map-list">
        <div
          :class="['road-map-card', itemIndex == index ? 'active' : '']"
          :style="'background-image: url(~@/' + item.background + ')'"
          v-for="(item, index) in itemList"
          :key="index"
          @mousemove="itemIndex = index"
        >
          <div :class="['road-map-card-icon']">
            <img
              :class="[
                'road-map-card-icon-img',
                itemIndex == index ? 'active' : '',
              ]"
              :src="itemIndex == index ? item.icon : item.iconOff"
            />
          </div>
          <div
            :class="['road-map-card-title', itemIndex == index ? 'active' : '']"
          >
            <div v-for="t in item.title" :key="t">{{t}}</div>
<!--            {{ item.title }}-->
          </div>
          <div
            class="road-map-card-bottom"
            :style="'background-image: url(assets/page4/success_change_01_on.png)'"
          >
            <div class="road-map-card-time-font">{{ item.time }}</div>
            <div
              class="road-map-card-time-cover"
              :style="'background-image: url(assets/page4/success_change_02.png)'"
              v-show="itemIndex == index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page4",
  data() {
    return {
      itemIndex: 0,
      itemList: [
        {
          icon: "assets/page4/success_icon_01_on.png",
          iconOff: "assets/page4/success_icon_01_off.png",
          title: ['Token Smart Contract', 'The Battle System'],
          time: 'Q2 2022',
          timeOn: "assets/page4/success_txt_01.png",
          timeOff: "assets/page4/success_txt_02.png",
        },
        {
          icon: "assets/page4/success_icon_02_on.png",
          iconOff: "assets/page4/success_icon_02_off.png",
          title: ['The Account Contract', 'The Building Acceleration System', 'The Warrior Training System'],
          time: 'Q3 2022',
          timeOn: "assets/page4/success_txt_03.png",
          timeOff: "assets/page4/success_txt_04.png",
        },
        {
          icon: "assets/page4/success_icon_03_on.png",
          iconOff: "assets/page4/success_icon_03_off.png",
          title: ['The Pet Development System', 'Technology Research System', 'The PVP Siege System'],
          time: 'Q4 2022',
          timeOn: "assets/page4/success_txt_05.png",
          timeOff: "assets/page4/success_txt_06.png",
        },
        {
          icon: "assets/page4/success_icon_04_on.png",
          iconOff: "assets/page4/success_icon_04_off.png",
          title: ['Other Game System', 'Game Beta test'],
          time: 'Upcoming',
          timeOn: "assets/page4/success_txt_07.png",
          timeOff: "assets/page4/success_txt_08.png",
        },
      ],
    };
  },
};
</script>
<style scoped src="../styles/page4.css">
</style>
<style scoped src="../styles/page4.mobile.css">
</style>
