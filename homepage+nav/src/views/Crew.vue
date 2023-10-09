<script>
import myComponent from "@/components/Content.vue";
import Nav from "@/components/Nav.vue";

export default{
  components:{
    myComponent,
    Nav
  },

  data(){
    return {
      pageFlag: 1,
      crow: {
        name: "",
        role: "",
        bio: "",
        link: ""
      },
      crews: [
        [
          "Douglas Hurley",
          "Commander",
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      ],
        [
          "Mark Shuttleworth",
          "Mission Specialist",
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        ],
        [
          "Victor Glover",
          "Pilot",
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        ],
        [
          "Anousheh Ansari",
          "Flight Engineer",
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        ]
      ]
    }
  },

  mounted() {
    this.crew = this.crews[0];
  },

  methods:{
    page1Click(){
      this.pageFlag = 1;
    },
    page2Click(){
      this.pageFlag = 2;
    },
    page3Click(){
      this.pageFlag = 3;
    },
    page4Click(){
      this.pageFlag = 4;
    },

    forContent(){
      var information = document.getElementById("component");
      information.classList.remove('animate__backInLeft');
      information.classList.add('animate__bounceOutRight');
      var picture = document.getElementById("myPicture");
      picture.classList.remove('animate__backInLeft')
      picture.classList.add('animate__bounceOutRight');
      setTimeout(()=>{
        if(this.pageFlag == 1){
          this.$refs.childComponent.toPage1();
          document.getElementById("picture-link-source").srcset=require('@/assets/crew/image-douglas-hurley.webp');
          document.getElementById("picture-link-img").src=require('@/assets/crew/image-douglas-hurley.webp');
        }
        else if(this.pageFlag == 2){
          document.getElementById("picture-link-source").srcset=require('@/assets/crew/image-mark-shuttleworth.webp');
          document.getElementById("picture-link-img").src=require('@/assets/crew/image-mark-shuttleworth.webp');
          this.$refs.childComponent.toPage2();
        }
        else if(this.pageFlag == 3){
          document.getElementById("picture-link-source").srcset=require('@/assets/crew/image-victor-glover.webp');
          document.getElementById("picture-link-img").src=require('@/assets/crew/image-victor-glover.webp');
          this.$refs.childComponent.toPage3();
        }
        else{
          document.getElementById("picture-link-source").srcset=require('@/assets/crew/image-anousheh-ansari.webp');
          document.getElementById("picture-link-img").src=require('@/assets/crew/image-anousheh-ansari.webp');
          this.$refs.childComponent.toPage4();
        }
        information.classList.remove('animate__bounceOutRight');
        information.classList.add('animate__backInLeft');
        picture.classList.remove('animate__bounceOutRight');
        picture.classList.add('animate__backInLeft');
        },550)
      }
  }
}
</script>

<template>
  <div class="body">
    <Nav chosen="3"></Nav>
    <div class="title">
      <span id="test" class="no">02</span><span class="text">meet your crew</span>
    </div>
    <!-- eslint-disable vue/require-component-is -->
    <myComponent ref="childComponent" id="component"  class="animate__animated animate__backInLeft animate__faster" :crews="crews"></myComponent>
    <picture id="myPicture" class="animate__animated animate__backInLeft animate__faster">
        <source id="picture-link-source" type="image/webp" srcset="@/assets/crew/image-douglas-hurley.webp">
        <img id="picture-link-img" src="@/assets/crew/image-douglas-hurley.webp" />
    </picture>
    <div class="pages">
      <div class="circle unchosed" v-if="this.pageFlag!=1" @click="page1Click();forContent()"></div>
      <div class="circle chosed" v-else></div>
      <div class="circle unchosed" v-if="this.pageFlag!=2" @click="page2Click();forContent()"></div>
      <div id="page2" class="circle chosed" v-else></div>
      <div class="circle unchosed" v-if="this.pageFlag!=3" @click="page3Click();forContent()"></div>
      <div class="circle chosed" v-else></div>
      <div class="circle unchosed" v-if="this.pageFlag!=4" @click="page4Click();forContent()"></div>
      <div class="circle chosed" v-else></div>
    </div>
    <div class="line-for-mobile"></div>
  </div>
</template>

<style lang="less" scoped>
  :root {
    padding: 0;
    margin: 0;
    font-size: 15px;
  }

  .body {
    display: flex;
    flex-direction: column;
    padding-left: 10vw;
    padding-right: 10vw;
    top: 0;
    left: 0;
    background: url("@/assets/crew/background-crew-desktop.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .title {
    display: flex;
    margin-top: 25vh; 
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  .no {
    color: rgb(86, 86, 86);
    margin-right: 2vw;
    font-weight: 600;
  }

  .text {
    color: white;
    font-weight: 400;
  }

  picture {
    z-index: 1;
    position: absolute;
    right: 10vw;
    bottom: 0;
  }

  img {
    height: 50vw;
  }
  
  .circle:hover {
    cursor: pointer;
  }

  .pages {
    height: 20vh;
    width: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }

  .chosed {
    background-color: white;
  }

  .unchosed {
    background-color: grey;
  }

  .line-for-mobile {
    display: none;
  }

  @media all and (max-width: 499px) {
    :root {
      font-size: 10px;
    }

    .body {
      align-items: center;
      height: auto;
    }

    .title {
      order: -5;
      margin-top: 15vh;
      justify-content: center;
    }

    picture {
      display: flex;
      position: relative;
      justify-content: center;
      right: 0;

      margin-top: 2rem;

      order: -4;
    }

    #component{
      margin-bottom: 10vh;
      padding-top: 0;
      order: -1;
    }

    .pages{
      order: -2;
      height: auto;
      margin-top: 2rem;
      width: 20vw;
    }

    .circle {
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }

    .line-for-mobile {
      display: flex;
      z-index: 1;
      width: 90vw;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.162);
      order: -3;
    }
  }
  
  // @media all and (max-width: 768px){
  //   .body {
  //     background: url("./assets/crew/background-crew-tablet.jpg");
  //   }

  // }

  @media all and (min-width: 500px) and (max-width: 888px){
    .body {
      height: auto;
      align-items: center;
    }

    .title {
      justify-content: left;
    }

    picture {
      display: flex;
      position: relative;
      justify-content: center;
      right: 0;
      order: 1;
    }

    .pages {
      width: 15vw;
    }
  }

  @media all and (min-width: 889px){
    .body {
      align-items: '';
    }
  }

</style>
