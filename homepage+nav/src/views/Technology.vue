<script setup>
import SpaceToggle from "@/components/SpaceToggle.vue"
import SpaceShow from "@/components/SpaceShow.vue"
import Nav from "@/components/Nav.vue"
import { reactive, ref } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const showInfo = reactive([
  {
    subtitle: "THE TERMINOLOGY…",
    title: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    pic: "url(../assets/technology/image-spaceport-portrait.jpg)",
  },
  {
    subtitle: "THE TERMINOLOGY…",
    title: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    pic: "url(../assets/technology/image-spaceport-portrait.jpg)",
  },
  {
    subtitle: "THE TERMINOLOGY…",
    title: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    pic: "url(../assets/technology/image-spaceport-portrait.jpg)",
  }
])

const curPage = ref(0);

function changeShow(newPage) {
  console.log(newPage)
  curPage.value = newPage;
}
</script>

<template>
  <div class="space-bg">
    <Nav chosen="4"></Nav>
    <div class="space-content">
      <div class="space-title font-barlow-condensed">
        <span class="space-num font-barlow">03</span><span class="space-text">SPACE LAUNCH 101</span>
      </div>
      <SpaceToggle @toggling="changeShow" :sum="showInfo.length" :cur="curPage + 1" />
      <SpaceShow :cur-page="curPage" :maintitle="showInfo[curPage].title" :subtitle="showInfo[curPage].subtitle"
        :text="showInfo[curPage].text" :pic="showInfo[curPage].pic" />
    </div>
  </div>
</template>

<style scoped>
.space-bg {
  background-image: url("@/assets/technology/background-technology-desktop.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: auto;
}

@media screen and (min-width: 768px) {

  .space-content {
    width: 1440px;
    min-width: 1440px;
    height: 900px;
    min-height: 900px;
    position: relative;
    margin-top: 180px;
  }

  .space-title {
    width: 305px;
    height: 34px;
    position: absolute;
    top: 212px;
    left: 166.5px;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 4.72px;
    display: flex;
    justify-content: space-between;
  }

  .space-num {
    font-weight: 700;
    color: #FFFFFF;
  }

  .space-text {
    font-weight: 400;
    color: #FFFFFF;
  }
}

@media screen and (max-width: 768px) and (min-width:377px) {
  .space-content {
    width: 100%;
    height: max-content;
    margin-top: 300px;
  }

  .space-title {
    width: 305px;
    height: 34px;
    margin-left: 38.75px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (max-width: 377px) {
  .space-content {
    width: 100%;
    height: max-content;
    margin-top: 150px;
  }

  .space-title {
    width: 305px;
    height: 34px; 
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    display: flex;
    justify-content: center;
    gap: 13px
  }
}
</style>