<template>
    <div id="cos">
        <div id="content">
            <h1>Cos de cumparaturi</h1>
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
        computed: mapGetters(['shopping', 'price', 'shoppingToPay', 'nrDeOrdine']),
        methods: {
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
                let data = {
                    cart: this.shopping,
                    price: this.price,
                    nrOrd: this.nrDeOrdine[this.nrDeOrdine.length - 1]
                };
                this.shoppingToPay.push(data);
                this.clearShoppingArray();
                this.nrDeOrdine.push(this.nrDeOrdine.length + 1)
            }
        }
    }
</script>

<style scoped>
    #cos{
        text-align: center;
        border: 2px solid #42b983;
        border-radius: 45px;
        height: 60vh;
        width: 25vw;
        display: flex;
        flex-direction: column;
        margin-right: 5vw;
        justify-content: space-around;
    }
    #content{
        height: 85%;
    }
    #price{
        height: 5%;
    }
    #buttons{
        height: 10%;
    }
    #buttons button{
        margin: 5px;
    }
    .data{
        height: 80%;
        overflow-y: auto;

    }
    table{
        width: 100%;
    }
    th, td{
        padding: 15px;
        text-align: left;
    }
    th{
        background-color: #42b983;
    }
    tr:nth-child(even) {
        background-color: #eee;
    }
    .text{
        font-size: 1.2em;
        display: flex;
        justify-content: space-evenly;
    }
</style>