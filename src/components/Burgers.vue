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
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 600px){
        #burgers img{
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