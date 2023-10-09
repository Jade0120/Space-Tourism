<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(["sum","cur"])
const emit = defineEmits(['toggling'])

function toggleClick(key) {
  emit('toggling',key)
}
const ballTop = computed(()=>{
  return (props.cur-1)*112
})
</script>

<template>
  <div class="toggle-main">
    <div class="white-ball"></div>
    <!-- <div v-for="item in props.sum" :class="[props.cur==item ? 'selected' : 'no-selected', 'toggle-choice', 'font-bellefair' ]" @click="toggleClick(item-1)">{{ item }}</div> -->
    <div v-for="item in props.sum" :class="[ 'toggle-choice', 'font-bellefair' ]" @click="toggleClick(item-1)">{{ item }}</div>
  </div>
</template>


<style scoped>
.toggle-main {
  width: 80px;
  position: absolute;
  top: 383px;
  left: 165px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 2;
}

.toggle-choice {
  width: 80px;
  height: 80px;
  border-radius: 999999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 36.67px;
  letter-spacing: 2px;
  color: #FFFFFF;
  mix-blend-mode: difference;
  cursor: pointer;
  border: 1px solid #FFFFFF;
}

/* .selected {
  background-color: #FFFFFF;
}

.no-selected {
  color: #FFFFFF;
} */

.white-ball {
  width: 80px;
  height: 80px;
  background-color: #FFFFFF;
  position: absolute;
  top: v-bind(ballTop+'px');
  border-radius: 999999px;
  transition: top  1s;
  z-index: -1;
  transition-timing-function: cubic-bezier(0.965, -0.600, 0.000, 1.475); 
}
</style>