<template>
    <div id="crispy" class="page">
        <div v-for="crispy in allCrispys" :key="crispy.id" class="container">
            <img :src="crispy.img">
            <div class="text">
                <div>
                    <h3>{{ crispy.name }}</h3>
                    <h4>{{ crispy.price }} lei</h4>
                </div>
                <button class="green" @click="addToBasket(crispy.id, crispy.name, crispy.price)">Adauga in cos</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "Crispy",
        computed: mapGetters(['allCrispys']),
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
    #crispy{
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