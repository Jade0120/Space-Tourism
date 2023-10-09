<template>
  <div class="body">
    <Nav chosen="1"></Nav>
    <div class="text">
      <div class="introduce">
        <p class="title">SO, YOU WANT TO TRAVEL TO</p>
        <p class="subTitle">SPACE</p>
        <p class="content">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>
      <div class="start">
        EXPLORE
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
export default {
  name:"Index",
  
  components:{
    Nav,
  }
}
</script>

<style lang="scss" scoped>
/* styles for desktop */
.body{
    margin: 0;
    background-image: url("@/assets/home/background-home-desktop.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
    .text{
      margin-bottom: 80px;
      margin-top: 43.1vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .introduce{
        width: 450px;
        height: 382px;
        margin-left: 11.4vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .title{
          width: 100%;
          text-align: left;
          margin: 0;
          font-size: 28px;
          font-family: var(--ff-primary);
          letter-spacing: 4.72px;
          line-height: 33.6px;
          font-weight: 400;
          color: #D0D6F9;
        }
        .subTitle{
          width: 100%;
          text-align: left;
          margin: 0;
          font-size: 150px;
          font-family: var(--ff-accent);
          line-height: 171.9px;
          font-weight: 400;
        }
        .content{
          font-family: var(--ff-primary);
          font-size: 18px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 1.5px;
          text-align: left;
          color: #D0D6F9;
        }
      }
      .start{
        width: 274px;
        height: 274px;
        line-height: 274px;
        min-width: 274px;
        margin-top: 12vh;
        text-align: center;
        color: black;
        margin-right: 11.4vw;
        border-radius: 50%;
        background-color:white;
        font-size: 32px;
        cursor: pointer;
        font-family: var(--ff-accent);
        letter-spacing: 2px;
      }
    }
}
/* styles for tablet */
@media screen and (max-width: 768px) and (min-width:377px){
  .body{
    background-image: url("@/assets/home/background-home-tablet.jpg");
    position: relative;
    .text{
      flex-direction: column;
      margin-top: 19.7vh;
      .introduce{
        width: 450px;
        height: 334px;
        margin: 0;
        .title{
          font-family: Barlow Condensed;
          font-size: 20px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 3.375px;
          text-align: center;
        }
        .subTitle{
          font-family: Bellefair;
          font-size: 150px;
          font-weight: 400;
          line-height: 150px;
          letter-spacing: 0px;
          text-align: left;
        }
        .content{
          font-family: var(--ff-primary);
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 1.5px;
          text-align: center;
          margin: 0;
          color: #D0D6F9;
        }
      }
      .start{
        width: 242px;
        height: 242px;
        min-width: 242px;
        line-height: 242px;
        margin: 15.2vh 0 0 0;
      }
    }
  }
}
/* styles for mobile */
@media screen and (max-width: 376px){
  .body{
    background-image: url("@/assets/home/background-home-mobile.jpg");
    .text{
      position: relative;
      z-index: 1;
      flex-direction: column;
      margin-top: 16px;
      .introduce{
        width: 327px;
        height: 276px;
        margin: 0;
        .title{
          font-family: Barlow Condensed;
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 2.700000047683716px;
          text-align: center;
        }
        .subTitle{
          font-family: Bellefair;
          font-size: 80px;
          font-weight: 400;
          line-height: 100px;
          letter-spacing: 0px;
          text-align: center;
        }
        .content{
          font-family: var(--ff-primary);
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 1px;
          text-align: center;
          color: #D0D6F9;
          margin: 0;
        }
      }
      .start{
        width: 150px;
        height: 150px;
        min-width: 150px;
        min-height: 150px;
        line-height: 150px;
        margin: 81px 0 0 0;
        font-family: Bellefair;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1.25px;
      }
    }
  }
}

</style>