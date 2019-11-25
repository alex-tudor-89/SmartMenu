<template>
    <div id="burgers" class="page">
        <div class="container" v-for="burger in allBurgers" :key="burger.id">
            <img :src="burger.img">
            <div class="text">
                <div>
                    <h3>{{ burger.name }}</h3>
                    <h4>{{ burger.price }} lei</h4>
                </div>
                <button class="green" @click="addToBasket(burger.id, burger.name, burger.price)">Adauga in cos</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "Burgers",
        computed: mapGetters(['allBurgers']),
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
    #burgers{
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