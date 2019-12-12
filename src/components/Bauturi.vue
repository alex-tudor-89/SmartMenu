<template>
    <div id="bauturi" class="page">
        <div class="container" v-for="bautura in allDrinks" :key="bautura.id">
            <img :src="bautura.img">
            <div class="text">
                <div>
                    <h3>{{ bautura.name }}</h3>
                    <h4>{{ bautura.price }} lei</h4>
                </div>
                <button class="green" @click="addToBasket(bautura.id, bautura.name, bautura.price)">Adauga in cos</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "Bauturi",
        computed: mapGetters(['allDrinks']),
        methods: {
            ...mapMutations(['checkIfEmpty']),

            addToBasket(id, name, price){
                let newObj = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1
                };
                Store.commit('checkIfEmpty', newObj);
            }
        }
    }
</script>

<style scoped>
    #bauturi{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 600px){
        #bauturi img{
            width: 60vw;
            height: auto;
        }
    }
    .container{
        margin: 0 5vw;
    }
    .text{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img{
        height: 40vh;
        border-radius: 20px;
    }
</style>