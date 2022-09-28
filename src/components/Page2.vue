<template>
  <div
    class="page pets"
    :style="'background-image: url(assets/page2/pets_background_01.png)'"
  >
    <div class="head">
      <img class="title" src="assets/page2/pets_title_01.png" />
    </div>
    <div class="body">
      <div
        class="pet-panel"
        :style="'background-image: url(assets/page2/pets_diban_06.png)'"
      >
        <div class="pet-panel-header">{{ petList[petIndex].name }}</div>
        <div class="pet-panel-body">
          <div
            :class="['pet-panel-icon', pet3d == 'active' ? 'ani' : '']"
            :style="
              'background-image: url(' +
              (pet3d == 'active'
                ? petList[petIndex].sprites
                : petList[petIndex].icon) +
              ')'
            "
          ></div>
          <img
            class="pet-panel-icon-scroll"
            src="assets/page2/pets_txt_02.png"
            v-show="pet3d == 'active'"
          />
        </div>
        <div class="pet-panel-bottom">
          <div
            :class="['pet-button-2d', pet3d == 'active' ? 'off' : 'on']"
             :style="
              'background-image: url(' +
              (pet3d == 'active'
                ? 'assets/page2/pets_button_02_off.png'
                : 'assets/page2/pets_button_02_on.png') +
              ')'
            "
            @click="pet3d = ''"
          ></div>
          <div
            :class="['pet-button-3d', pet3d == 'active' ? 'on' : 'off']"
            :style="
              'background-image: url(' +
              (pet3d == 'active'
                ? 'assets/page2/pets_button_01_on.png'
                : 'assets/page2/pets_button_01_off.png') +
              ')'
            "
            @click="pet3d = 'active'"
          ></div>
        </div>
      </div>
      <div
        class="pet-list"
        :style="'background-image: url( assets/page2/pets_diban_05.png)'"
      >
        <div
          class="pet-card-container"
          v-for="(pet, index) in petList"
          :key="index"
          @click="petIndex = index"
        >
          <div
            :class="['pet-card', petIndex == index ? 'active' : '']"
            :style="'background-image: url(' + pet.background + ')'"
          >
            <div class="pet-card-header">{{ pet.name }}</div>
            <div class="pet-card-body">
              <img class="pet-card-icon" :src="pet.icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer"
      :style="'background-image: url(assets/page2/pets_ditiao_01.png)'"
    >
      <img class="pet-book-icon" src="assets/page2/pets_icon_01.png" />
      <img class="pet-arrow-icon" src="assets/page2/pets_icon_02.png" />
      <div class="pet-footer-desc">
        {{ petList[petIndex].desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page2",
  props: {
    msg: String,
  },
  data() {
    return {
      petIndex: 0,
      pet3d: "",
      petList: [
        {
          name: "Chomper",
          icon: "assets/page2/2d/monster_1_2d.png",
          sprites: "assets/page2/3d/monster_1_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_01.png",
          desc: "Dangerous carnivorous plants, if unfortunately encountered please go around.",
        },
        {
          name: "Red Armor",
          icon: "assets/page2/2d/monster_2_2d.png",
          sprites: "assets/page2/3d/monster_2_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_01.png",
          desc: "A docile beetle that will dash to the enemy's side in case of danger.",
        },
        {
          name: "Pogo",
          icon: "assets/page2/2d/monster_3_2d.png",
          sprites: "assets/page2/3d/monster_3_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_02.png",
          desc: "Monsters that like to live in solitary, always jumping around in their own territory.",
        },
        {
          name: "Butterfly",
          icon: "assets/page2/2d/monster_4_2d.png",
          sprites: "assets/page2/3d/monster_4_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_02.png",
          desc: "Evolving wings that can dazzle enemies.",
        },
        {
          name: "Dauuricus",
          icon: "assets/page2/2d/monster_5_2d.png",
          sprites: "assets/page2/3d/monster_5_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_03.png",
          desc: "Steel needle like thorns, capable of both offensive and defensive moves.",
        },
        {
          name: "Noctula",
          icon: "assets/page2/2d/monster_6_2d.png",
          sprites: "assets/page2/3d/monster_6_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_03.png",
          desc: "A nightwalker, coming and going freely in the primitive jungle, either day or night.",
        },
        {
          name: "Hermit Crab",
          icon: "assets/page2/2d/monster_7_2d.png",
          sprites: "assets/page2/3d/monster_7_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_04.png",
          desc: "Carrying this heavy shell on his back, he travels from sea to sea and from place to place.",
        },
        {
          name: "Leng Spider",
          icon: "assets/page2/2d/monster_8_2d.png",
          sprites: "assets/page2/3d/monster_8_3d/merge_from_ofoct.png",
          background: "assets/page2/pets_diban_04.png",
          desc: "The brighter the colour the more dangerous it is. It's common sense to remember this!",
        },
      ],
    };
  },
};
</script>
<style scoped src="../styles/page2.css">
</style>
<style scoped src="../styles/page2.mobile.css">
</style>
