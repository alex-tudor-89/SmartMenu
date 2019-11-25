<template>
    <div id="combo" class="page">
        <div class="container" v-for="combo in allCombos" :key="combo.id">
            <div class="imgs">
                <img :src="combo.img1">
                <img :src="combo.img2">
            </div>
            <div class="text">
                <div>
                    <h3>{{ combo.name }}</h3>
                    <h4>{{ combo.price }} lei</h4>
                </div>
                <button class="green" @click="addToBasket(combo.id, combo.name, combo.price)">Adauga in cos</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "Combo",
        computed: mapGetters(['allCombos']),
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
    #combo{
        display: flex;
        flex-direction: column;
    }
    .container{
        text-align: center;
        display: flex;
        padding-bottom: 10px;
    }
    .imgs{
        justify-self: flex-start;
        width: 15vw;
        margin-left: 10vw;
        margin-right: 8vw;
        display: flex;
    }
    .imgs img{
        width: 10vw;
        border-radius: 40px;
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: auto;
        height: 100%;
        text-align: start;
    }
</style>