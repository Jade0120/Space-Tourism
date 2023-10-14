<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
const props = defineProps(["subtitle", "maintitle", "text", "pic", "curPage"])

let bgList = ['bg1', 'bg2', 'bg3']
</script>

<template>
  <div class="show-main">
    <div v-if="width <= 768" :class="['show-pic', bgList[props.curPage]]"></div>
    <div class="show-text">
      <div class="subtitle font-barlow-condensed">{{ props.subtitle }}</div>
      <div class="maintitle font-bellefair">{{ props.maintitle }}</div>
      <div class="text font-barlow">{{ props.text }}</div>
    </div>
    <div v-if="width > 768" :class="['show-pic', bgList[props.curPage]]"></div>
    <!-- :style="{ 'background-image': 'url('+'../assets/technology/image-spaceport-landscape.jpg'+')' }" -->
  </div>
</template>


<style scoped>
.subtitle {
  color: #D0D6F9;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 2.7px;
}

.maintitle {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 56px;
  line-height: 64.18px;
  white-space: nowrap;
}

.text {
  color: #D0D6F9;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}

@media screen and (min-width: 768px) {
  .show-main {
    width: 100%;
    position: absolute;
    top: 272px;
    display: flex;
  }

  .show-text {
    width: 444px;
    height: 303px;
    position: absolute;
    top: 111px;
    left: 325px;
  }

  .show-pic {
    height: 527px;
    width: 515px;
    margin-left: auto;
    margin-right: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg1 {
    background-image: url(../assets/technology/image-launch-vehicle-portrait.jpg);
  }

  .bg2 {
    background-image: url(../assets/technology/image-space-capsule-portrait.jpg);
  }

  .bg3 {
    background-image: url(../assets/technology/image-spaceport-portrait.jpg);
  }
}



@media screen and (max-width: 768px) and (min-width:377px) {
  .show-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .show-text {
    width: 458px;
    height: 237px;
    margin-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
  }

  .maintitle {
    font-weight: 400;
    font-size: 40px;
    line-height: 45.84px;
    white-space: nowrap;
  }

  .text {
    color: #D0D6F9;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  .bg1 {
    background-image: url(../assets/technology/image-launch-vehicle-landscape.jpg);
  }

  .bg2 {
    background-image: url(../assets/technology/image-space-capsule-landscape.jpg);
  }

  .bg3 {
    background-image: url(../assets/technology/image-spaceport-landscape.jpg);
  }

  .show-pic {
    height: 310px;
    width: 768px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 30px;
  }
}

@media screen and (max-width: 377px) {
  .show-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .show-text {
    width: 375px;
    height: 237px;
    margin-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    letter-spacing: 2.36px;
  }

  .maintitle {
    font-weight: 400;
    font-size: 24px;
    line-height: 27.5px;
    white-space: nowrap;
  }

  .text {
    color: #D0D6F9;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
  }

  .bg1 {
    background-image: url(../assets/technology/image-launch-vehicle-landscape.jpg);
  }

  .bg2 {
    background-image: url(../assets/technology/image-space-capsule-landscape.jpg);
  }

  .bg3 {
    background-image: url(../assets/technology/image-spaceport-landscape.jpg);
  }

  .show-pic {
    height: 170px;
    width: 375px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 30px;
  }
}
</style>