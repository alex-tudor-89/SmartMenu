<template>
    <div id="salate">
        <div v-for="salata in allSalads" :key="salata.id" id="container">
            <img :src="salata.img">
            <h3>{{ salata.name }}</h3>
            <h4>{{ salata.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Salate",
        computed:  mapGetters(['allSalads'])
       }
</script>

<style scoped>
    #salate{
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