<template>
    <div id="crispy">
        <div v-for="crispy in allCrispys" :key="crispy.id" id="container">
            <img :src="crispy.img">
            <h3>{{ crispy.name }}</h3>
            <h4>{{ crispy.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Crispy",
        computed: mapGetters(['allCrispys'])
    }
</script>

<style scoped>
    #crispy{
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