<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
const props = defineProps(["sum", "cur"])
const emit = defineEmits(['toggling'])

function toggleClick(key) {
  emit('toggling', key)
}
const ballTop = computed(() => {
  return (props.cur - 1) * 112
})
</script>

<template>
  <div v-if="width > 768" class="toggle-main">
    <div class="white-ball"></div>
    <!-- <div v-for="item in props.sum" :class="[props.cur==item ? 'selected' : 'no-selected', 'toggle-choice', 'font-bellefair' ]" @click="toggleClick(item-1)">{{ item }}</div> -->
    <div v-for="item in props.sum" :class="['toggle-choice', 'font-bellefair']" @click="toggleClick(item - 1)">{{ item }}
    </div>
  </div>
  <div v-else class="toggle-main">
    <div v-for="item in props.sum" :class="['toggle-choice', 'font-bellefair']" @click="toggleClick(item - 1)">{{ item }}
    </div>
  </div>
</template>


<style scoped>
.white-ball {

  background-color: #FFFFFF;
  position: absolute;
  top: v-bind(ballTop + 'px');
  border-radius: 999999px;
  transition: top 1s;
  z-index: -1;
  transition-timing-function: cubic-bezier(0.965, -0.600, 0.000, 1.475);
}

.toggle-choice {

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

.toggle-main {
  display: flex;
  gap: 32px;
  z-index: 2;
}

@media screen and (min-width: 768px) {
  .toggle-main {
    width: 80px;
    position: absolute;
    top: 383px;
    left: 165px;
    flex-direction: column;
    gap: 32px;
    z-index: 2;
  }

  .white-ball {
    width: 80px;
    height: 80px;
  }

  .toggle-choice {
    width: 80px;
    height: 80px;
  }
}

@media screen and (max-width: 768px) and (min-width:377px) {
  .toggle-main {
    width: 210px;
    height: 60px;
    position: absolute;
    top: calc( 85% - 30px );
    left: calc( 50% - 105px );
    gap: 16px;
    z-index: 2;
  }

  .toggle-choice {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 377px) {
  .toggle-main {
    width: 152px;
    height: 40px;
    position: absolute;
    top: calc( 60% - 30px );
    left: calc( 50% - 76px );
    gap: 16px;
    z-index: 2;
  }

  .toggle-choice {
    width: 40px;
    height: 40px;
  }
}
</style>