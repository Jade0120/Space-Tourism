<template>
    <div class="body">
    <Nav chosen="2"></Nav>
      <div class="Top">
        <div class="Number">
          01
        </div>
        <div class="Title">
          Pick your destination
        </div>
      </div>
      <div class="Center">
        <div class="Left">
          <transition name="fade" mode="out-in">
            <img :key="ImgList[ClickActive]" :src="ImgList[ClickActive]" alt="" class="ActiveImg">
          </transition>
        </div>
        <div class="Right">
          <div class="Tab">
            <div class="TabItem" v-for="(Item, Index) in TabList" @click="ClickFn(Index)" @mouseover="MouseFn(Index)"
              @mouseleave="MouseFn(-1)" :class="{ ActiveLine: ClickActive === Index, 'HoverLine': MouseActive === Index }">
              {{ Item }}
            </div>
          </div>
  
          <transition name="fade" mode="out-in">
            <div class="RightTitle" :key="ArtList[ClickActive].Title">{{ ArtList[ClickActive].Title }}</div>
          </transition>
  
  
          <transition name="fade" mode="out-in">
            <div class="RightArticle" :key="ArtList[ClickActive].Content">{{ ArtList[ClickActive].Content }}</div>
          </transition>
  
          <div class="RightHr">
  
          </div>
  
          <div class="RightDesc">
            <transition name="fade" mode="out-in">
              <div class="Ky" :key="ArtList[ClickActive].Km">
                <div class="T">
                  AVG. DISTANCE
                </div>
                <div class="B">
                  {{ ArtList[ClickActive].Km }}
                </div>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div class="Ky" :key="ArtList[ClickActive].Year">
                <div class="T">
                  Est. travel time
                </div>
                <div class="B">
                  {{ ArtList[ClickActive].Year }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Nav from "@/components/Nav.vue"
  import { ref, reactive } from 'vue';
  const ImgList = ref([
    require('@/assets/destination/image-europa.webp'),
    require('@/assets/destination/image-mars.webp'),
    require('@/assets/destination/image-moon.webp'),
    require('@/assets/destination/image-titan.webp'),
  ])
  
  const ArtList = ref([
    {
      Title: 'EUROPA',
      Content: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      Km: '628 MIL. KM',
      Year: '3 YEARS'
    },
    {
      Title: 'MARS',
      Content: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      Km: '225 MIL. KM',
      Year: '9 MONTHS'
    }, {
      Title: 'MOON',
      Content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      Km: '384,400 KM',
      Year: '3 DAYS'
    }, {
      Title: 'TITAN',
      Content: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      Km: '1.6 MIL. KM',
      Year: '7 YEARS'
    }
  ])
  
  
  const TabList = ref([
    "EUROPA",
    "EARTH",
    "MOON",
    "TITAN"
  ])
  
  let ClickActive = ref(0)
  let MouseActive = ref(null)
  
  const ClickFn = (Index) => {
    console.log(Index.value)
    ClickActive.value = Index
  }
  
  const MouseFn = (Index) => {
    MouseActive.value = Index
    console.log(Index)
  }
  
  
  </script>
  
  <style lang="less" scoped>
  @font-face {
    font-family: 'Barlow-Regular';
    src: url('@/assets/fonts/Barlow-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'BarlowCondensed-Regular';
    src: url('@/assets/fonts/BarlowCondensed-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Bellefair-Regular';
    src: url('@/assets/fonts/Bellefair-Regular.ttf') format('truetype');
  }
  
  // ...其他样式...
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .ActiveLine {
    transition: 1s;
    border-bottom: 3px solid #FFF !important;
  }
  
  .HoverLine {
    transition: 1s;
    border-bottom: 3px solid #86878b;
  }
  
  .body {
    font-family: 'Barlow-Regular', sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
    color: white;
    overflow: hidden;
    background: url('@/assets/destination/background-destination-desktop.jpg');
    .Top {
      padding-top: 212px;
      padding-left: 166px;
      color: #FFF;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 4.725px;
      text-transform: uppercase;
      display: flex;
  
      .Number {
        color: #4f5259;
        margin-right: 20px;
      }
    }
  
    .ActiveImg {
      width: 440px;
      padding-top: 68px;
      padding-left: 245px;
      padding-right: 113px;
    }
  
    .Center {
      display: flex;
        justify-content: space-between;
        align-items: center;
      .Right {
        .Tab {
          color: #D0D6F9;
          display: flex;
          font-family: 'BarlowCondensed-Regular';
          font-size: 16px;
          font-style: normal;
          width: 286px;
          height: 34px;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 2.7px;
          justify-content: space-between;
  
          .TabItem {
            cursor: pointer;
            transition: 1s;
            margin-right: 35px;
  
          }
        }
  
        .RightTitle {
          color: #FFF;
          margin-top: 37px;
          font-family: 'Bellefair-Regular';
          font-size: 100px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
  
        .RightArticle {
          width: 444px;
          color: #D0D6F9;
          // font-family: Barlow;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;
          /* 177.778% */
        }
  
        .RightHr {
          width: 444px;
          height: 1px;
          flex-shrink: 0;
          background: #383B4B;
          margin-top: 54px;
          margin-bottom: 28px;
        }
  
        .RightDesc {
          display: flex;
  
          .Ky {
            .T {
              color: #D0D6F9;
              font-family: 'BarlowCondensed-Regular';
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 2.362px;
              text-transform: uppercase;
            }
  
            .B {
              color: #FFF;
              font-family: 'Bellefair-Regular';
              font-size: 28px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              text-transform: uppercase;
              margin-top: 12px;
            }
          }
  
          .Ky:first-child {
  
            color: black;
            margin-right: 68px;
          }
        }
      }
    }
  }
  </style>
  