<script setup lang="ts">
const props = defineProps(["subtitle", "maintitle", "text", "pic"])
</script>

<template>
  <div class="show-main">
    <div class="show-text">
      <div class="subtitle font-barlow-condensed">{{ props.subtitle }}</div>
      <div class="maintitle font-bellefair">{{ props.maintitle }}</div>
      <div class="text font-barlow">{{ props.text }}</div>
    </div>
    <div class="show-pic" :style="{ 'background-image': 'url('+props.pic+')' }"></div>
  </div>
</template>


<style scoped>
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

.show-pic {
  height: 527px;
  width: 515px;
  margin-left: auto;
  margin-right: 0;
}

.text {
  color: #D0D6F9;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}
</style>