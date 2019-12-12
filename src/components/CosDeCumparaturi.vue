<template>
    <div id="cos">
        <div id="content">
            <div class="data">
                <table>
                    <tr>
                        <th>Produs</th>
                        <th>Pret/buc</th>
                        <th>Cantitate</th>
                        <th>Optiuni</th>
                    </tr>
                    <tr v-for="item in shopping" :key="item.index">
                       <td>{{ item.name }}</td>
                        <td>{{ item.price }} lei</td>
                        <td>{{item.quantity}} buc </td>
                        <td><button class="btn-small" @click="subtract(item.id)">-</button><button class="btn-small" @click="add(item.id)">+</button><button class="red-small" @click="remove(item.id)">x</button></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="text">
            <span>Nr de ordine: <b>{{nrDeOrdine[nrDeOrdine.length - 1]}}</b></span>
            <span id="price" >Pret: <b>{{ price }}</b> lei</span>
        </div>
        <div id="buttons">
            <button class="red" @click="clearShoppingArray">ANULEAZA</button>
            <button class="green" @click="prepareCart">Cumpara</button>
        </div>
    </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex'

    export default {
        name: "CosDeCumparaturi",
        computed: mapGetters(['shopping', 'price', 'shoppingToPay', 'nrDeOrdine', 'counterCasa']),
        methods: {
            showBtn(){
                if(this.shopping.length == 0){
                    return false
                } else {return true}
            },
            clearShoppingArray() {
                Store.commit('clearArray');
            },
            subtract(id){
                for (let i = 0; i < this.shopping.length; i++) {
                    if(id === this.shopping[i].id){
                        this.shopping[i].quantity -= 1;
                        if(this.shopping[i].quantity == 0){
                            this.remove(id)
                        }
                        Store.commit('calcPrice');
                    }
                }
            },
            add(id){
                for (let i = 0; i < this.shopping.length; i++) {
                    if(id === this.shopping[i].id){
                        this.shopping[i].quantity +=1;
                        Store.commit('calcPrice');
                    }
                }
            },
            remove(id){
                for (let i = 0; i < this.shopping.length; i++) {
                    if(id === this.shopping[i].id){
                        this.shopping.splice(i, 1);
                        Store.commit('calcPrice');
                    }
                }
            },
            prepareCart(){
                if(this.shopping.length !== 0) {
                    let data = {
                        cart: this.shopping,
                        price: this.price,
                        nrOrd: this.nrDeOrdine[this.nrDeOrdine.length - 1]
                    };
                    this.shoppingToPay.push(data);
                    Store.commit('addToLength');
                    this.nrDeOrdine.push(this.nrDeOrdine.length + 1);
                    this.clearShoppingArray();
                }
            }
        }
    }
</script>

<style scoped>
    #cos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 50vh;
        text-align: center;
    }
    #content{
        height: 85%;
    }
    .data{
        height: 100%;
        overflow-y: auto;
    }
    .data table{
        width: 100%;
        padding: 0 25px;
        text-align: start;
    }
    .data tr{
        height: 40px;
    }
    .data th{
        background-color: #42b983;
        position: sticky;
        top: 0;
    }
    .data tr:nth-child(even){
        background-color: #eeeeee;
    }
    .text{
        height: 5%;
        display: flex;
        justify-content: center;
    }
    .text span{
        margin: 0 15px;
    }
    #buttons{
        height: 10%;
        display: flex;
        justify-content: center;
    }
    #buttons button{
        margin: 0 15px;
    }
</style>