<template>
    <div id="burgers">
        <div id="container" v-for="burger in allBurgers" :key="burger.id">
            <img :src="burger.img">
            <h3>{{ burger.name }}</h3>
            <h4>{{ burger.price }}</h4>
            <button :id="burger.id" @click="addToBasket(burger.id)">Buy</button>
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
            ...mapMutations(['add']),

            addToBasket(id){
                for (let i = 0; i < this.allBurgers.length; i++) {
                    if (this.allBurgers[i].id === id){
                        let newObj = {
                            id: this.allBurgers[i].id,
                            name: this.allBurgers[i].name,
                            price: this.allBurgers[i].price
                        };
                        Store.commit('add', newObj);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #burgers{
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