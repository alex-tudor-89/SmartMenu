<template>
    <div id="bauturi">
        <div id="container" v-for="bautura in allDrinks" :key="bautura.id">
            <img :src="bautura.img">
            <h3>{{ bautura.name }}</h3>
            <h4>{{ bautura.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Bauturi",
        computed:  mapGetters(['allDrinks'])
    }
</script>

<style scoped>
    #bauturi{
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