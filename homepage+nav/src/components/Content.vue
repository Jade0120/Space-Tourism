<script>
    export default{
        props:{
            'crews':Array,
            default:()=>[] //一维：人；二维：姓名、职位、介绍
        },

        methods:{
            toPage1(){
                document.getElementsByClassName("role")[0].innerHTML = this.crews[0][1];
                document.getElementsByClassName("name")[0].innerHTML = this.crews[0][0];
                document.getElementsByClassName("bio")[0].innerHTML = this.crews[0][2];
            },
            toPage2(){
                document.getElementsByClassName("role")[0].innerHTML = this.crews[1][1];
                document.getElementsByClassName("name")[0].innerHTML = this.crews[1][0];
                document.getElementsByClassName("bio")[0].innerHTML = this.crews[1][2];
            },
            toPage3(){
                document.getElementsByClassName("role")[0].innerHTML = this.crews[2][1];
                document.getElementsByClassName("name")[0].innerHTML = this.crews[2][0];
                document.getElementsByClassName("bio")[0].innerHTML = this.crews[2][2];
            },
            toPage4(){
                document.getElementsByClassName("role")[0].innerHTML = this.crews[3][1];
                document.getElementsByClassName("name")[0].innerHTML = this.crews[3][0];
                document.getElementsByClassName("bio")[0].innerHTML = this.crews[3][2];
            }
        }
    }
</script>

<template>
    <div>
        <p class="role">{{ crews[0][1] }}</p>
        <p class="name">{{ crews[0][0] }}</p>
        <p class="bio">{{ crews[0][2] }}</p>
    </div>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        width: 50%;
        flex-direction: column;
        padding-top: 15vh;
        .role{
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 1);
            text-transform: uppercase;
            font-family: var(--ff-accent);
            font-size: 32px;
            line-height: 37px;
            letter-spacing: 0px;
            text-align: left;
            opacity: 50.42%;
        }
        .name{
            margin:0 0 0.5rem 0;
            color: rgba(255, 255, 255, 1);
            text-transform: uppercase;
            font-family: var(--ff-accent);
            font-size: 56px;
            line-height: 64px;
            letter-spacing: 0px;
            text-align: left;
            white-space:nowrap; 
        }
        .bio{
            padding: 0;
            color: rgba(208, 214, 249, 1);
            text-align: left;
            font-family: var(--ff-primary);
            font-size: 18px;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: left;
        }
    }
@media screen and (max-width: 888px) and (min-width:500px){
    div{
        padding-top: 8vh;
        .role{
            text-align: center;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0px;
        }
        .name{
            text-align: center;
            font-size: 40px;
            line-height: 46px;
            letter-spacing: 0px;
        }
        .bio{
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
        }
    }
}
@media all and (max-width: 888px){
    div {
        width: 100%;
        align-items: center;
        .role {
            width: 100%;
            text-align: center;
        }
        .name {
            width: 100%;
            text-align: center;
        }
        .bio {
            width: 90%;
            text-align: center;
        }
    }
}
</style>