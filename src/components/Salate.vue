<template>
    <div id="salate" class="page">
        <div v-for="salata in allSalads" :key="salata.id" class="container">
            <img :src="salata.img">
            <div class="text">
                <div>
                    <h3>{{ salata.name }}</h3>
                    <h4>{{ salata.price }} lei</h4>
                </div>
                <button class="green" @click="addToBasket(salata.id, salata.name, salata.price)">Adauga in cos</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "Salate",
        computed: mapGetters(['allSalads']),
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
    #salate{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 600px){
        #salate img{
            width: 50vw;
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
        height: 30vh;
        border-radius: 20px;
    }
</style>