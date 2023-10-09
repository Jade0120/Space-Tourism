<template>
  <div class="box">
    <img class="logo" src="@/assets/shared/logo.svg" alt="">
    <img class="hamburger" src="@/assets/shared/icon-hamburger.svg" alt="" @click="hamburgerClick">
    <div class="tabbar" ref="tabbar">
        <img class="close" src="@/assets/shared/icon-close.svg" alt="" @click="closeClick">
        <ul class="nav">
            <div :class="{'active':isActive==1,'NavItem':isActive!=1}" to="" tag="li" @click="navItemClick1()"><router-link to="/" tag="li"><span>00 </span>HOME</router-link></div>
            <div :class="{'active':isActive==2,'NavItem':isActive!=2}" to="" tag="li" @click="navItemClick2()"><router-link to="/Destination" tag="li"><span>01 </span>DESTINATION</router-link></div>
            <div :class="{'active':isActive==3,'NavItem':isActive!=3}" to="" tag="li" @click="navItemClick3()"><router-link to="/Crew" tag="li"><span>02 </span>CREW</router-link></div>
            <div :class="{'active':isActive==4,'NavItem':isActive!=4}" to="" tag="li" @click="navItemClick4()"><router-link to="/Technology" tag="li"><span>03 </span>TECHNOLOGY</router-link></div>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      chosen:{
          type:Number
      }
  },
  mounted(){
    console.log(this.chosen);
  },
  data(){
    return{
      isActive:this.chosen
    }
  },
  methods:{
    navItemClick1(){
      this.isActive=1;
    },
    navItemClick2(){
      this.isActive=2;
    },
    navItemClick3(){
      this.isActive=3;
    },
    navItemClick4(){
      this.isActive=4;
    },
    hamburgerClick(){
      this.$refs.tabbar.style.right = 0;
    },
    closeClick(){
      this.$refs.tabbar.style.right = -254+"px";
    }
  }
}
</script>

<style lang="scss" scoped>
/* styles for desktop */
  .box{
    width:100vw;
    height: 136px;
    position: absolute;
    top: 0;
    z-index: 999;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        height: 48px;
        margin-left: 55px;
        border-radius: 50%;
    }
    .hamburger{
      display: none;
    }
    .tabbar::after{
      content: "";
      width: 55%;
      height: 1px;
      position: absolute;
      opacity: 0.3;
      top: 50%;
      left: -48%;
      background-color: white;
    }
    .tabbar{
      width: 57.6%;
      min-width: 450px;
      position: relative;
      backdrop-filter: blur(20px);
      background-color: rgba(255, 255, 255, 0.05);
      .close{
          display: none;
        }
      .nav{
        width: 65.3%;
        height: 96px;
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .NavItem{
          height: 96px;
          line-height: 96px;
          cursor: pointer;
          font-weight: 400;
          span{
            font-weight: 700;
          }
        }
        .active{
          border-bottom: 3px solid rgba(255, 255, 255, 1);
          height: 96px;
          line-height: 96px;
          cursor: pointer;
          span{
            font-weight: 700;
          }
        }
        .active:hover{
          border-bottom: 3px solid rgba(255, 255, 255, 1);
        }
        .NavItem:hover{
          border-bottom: 3px solid rgba(255, 255, 255, 0.3);
        }
      }
    }
  }

/* styles for tablet */
@media screen and (max-width: 768px) and (min-width:377px){
  .box{
    height: 96px;
    padding-top:0;
    .tabbar{
      width: 58.5%;
      min-width: 0;
      .nav{
        width: 89.2%;
        .NavItem{
          span{
            display: none;
          }
        }
        .active{
          span{
            display: none;
          }
        }
      }
    }
    .tabbar::after{
      display: none;
    }
  }
}
/* styles for mobile */
@media screen and (max-width: 376px){
  .box{
    width:100vw;
    height: 96px;
    position: relative;
    padding-top: 0;
    .hamburger{
      display: block;
      margin-right: 24px;
    }
    .logo{
        height: 40px;
        margin-left: 24px;
    }
    .tabbar::after{
      display: none;
    }
    .tabbar{
      width: 254px;
      height: 100vh;
      min-width: 0;
      right: -254px;
      top: 0;
      position: fixed;
      z-index: 999;
      transition:all ease-in-out .3s;
      .close{
        display: block;
        margin: 34px 0 65px 209px;
      }
      .nav{
        width: 100%;
        height: 172px;
        padding-left: 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .NavItem{
          width: 100%;
          height: 20%;
          line-height: 100%;
          display: flex;
          align-items: center;
          span{
            margin-right: 1ch;
          }
        }
        .NavItem:hover{
          border-bottom: none;
        }
        .active{
          border-bottom: none;
          border-right: 3px solid rgba(255, 255, 255, 1);
          width: 100%;
          height: 20%;
          line-height: 100%;
          display: flex;
          align-items: center;
          span{
            margin-right: 1ch;
          }
        }
        .active:hover{
          border-bottom: none;
        }
      }
    }
  }
} 
</style>