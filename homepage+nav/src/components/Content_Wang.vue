<script>
    export default{
        props:{
            'name':String,
            'role':String,
            'bio':String
        }
    }
</script>

<template>
    <div>
        <h2>{{ role }}</h2>
        <h1>{{ name }}</h1>
        <div id="info">{{ bio }}</div>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        width: 50%;
        flex-direction: column;
        padding-top: 15vh;
    }

    h1{
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 1rem;
        color: white;
        text-transform: uppercase;
    }

    h2{
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
        color: grey;
        text-transform: uppercase;
    }

    #info{
        padding: 0;
        color: rgb(201, 219, 235);
        font-weight: 100;
        font-size: 1rem;
        line-height: 2rem;
    }
</style>