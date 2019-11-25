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
        flex-direction: column;
    }
    .container{
        text-align: center;
        display: flex;
        padding-bottom: 10px;
    }
    .container img{
        justify-self: flex-start;
        width: 15vw;
        margin-left: 10vw;
        margin-right: 5vw;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: auto;
        height: 100%;
        text-align: start;
    }
    img{
        width: 15vw;
        border-radius: 40px;
    }
</style>