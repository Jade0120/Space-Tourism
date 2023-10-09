<script>
    export default{
        props:{
            'crews':Array,
            default:()=>[] //一维：人；二维：姓名、职位、介绍
        },

        methods:{
            toPage1(){
                document.getElementsByTagName("h2")[0].innerHTML = this.crews[0][1];
                document.getElementsByTagName("h1")[0].innerHTML = this.crews[0][0];
                document.getElementById("info").innerHTML = this.crews[0][2];
            },
            toPage2(){
                document.getElementsByTagName("h2")[0].innerHTML = this.crews[1][1];
                document.getElementsByTagName("h1")[0].innerHTML = this.crews[1][0];
                document.getElementById("info").innerHTML = this.crews[1][2];
            },
            toPage3(){
                document.getElementsByTagName("h2")[0].innerHTML = this.crews[2][1];
                document.getElementsByTagName("h1")[0].innerHTML = this.crews[2][0];
                document.getElementById("info").innerHTML = this.crews[2][2];
            },
            toPage4(){
                document.getElementsByTagName("h2")[0].innerHTML = this.crews[3][1];
                document.getElementsByTagName("h1")[0].innerHTML = this.crews[3][0];
                document.getElementById("info").innerHTML = this.crews[3][2];
            }
        }
    }
</script>

<template>
    <div>
        <h2>{{ crews[0][0] }}</h2>
        <h1>{{ crews[0][1] }}</h1>
        <div id="info">{{ crews[0][2] }}</div>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-top: 10vh;
        text-align: center;
    }

    h1{
        font-size: 3rem;
        width: 50%;
        font-weight: 300;
        margin-bottom: 1rem;
        color: white;
        text-transform: uppercase;
    }

    h2{
        font-size: 2rem;
        width: 50%;
        font-weight: 300;
        margin-bottom: 0.5rem;
        color: grey;
        text-transform: uppercase;
    }

    #info{
        padding: 0;
        width: 45%;
        color: rgb(201, 219, 235);
        font-weight: 100;
        font-size: 1rem;
        line-height: 2rem;
    }

    @media all and (max-width: 888px){
      div {
        width: 100%;
        align-items: center;
      }

      h1 {
        width: 100%;
      }

      h2 {
        width: 100%;
      }

      #info {
        width: 90%;
        text-align: center;
      }


    }
</style>