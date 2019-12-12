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
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 600px){
        #combo img{
            display: none;
        }
        #combo{
            justify-content: flex-start;
        }
        .text{
            width: 80vw;
        }
    }
    .container{
        margin: 2vh 5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .text{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .imgs{
        display: flex;
    }
    .imgs img{
        width: 20vh;
        border-radius: 20px;
    }
</style>