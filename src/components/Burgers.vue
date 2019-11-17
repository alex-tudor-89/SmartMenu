<template>
    <div id="burgers">
        <div id="container" v-for="burger in allBurgers" :key="burger.id">
            <img :src="burger.img">
            <h3>{{ burger.name }}</h3>
            <h4>{{ burger.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Burgers",
        computed: mapGetters(['allBurgers'])
    }
</script>

<style scoped>
    #burgers{
        display: flex;
        flex-direction: column;
    }
    #container{
        text-align: center;
    }
    img{
        width: 15vw;
        border-radius: 40px;
    }
</style>