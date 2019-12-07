<template>
  <div id="checkout">
      <div class="order" v-for="order in checkoutList" :key="order.index">
          <div class="content">
              <h3>Comanda nr: {{ order.nrOrd }}</h3>
              <table>
                  <tr>
                      <th>Produs</th>
                      <th>Cantitate</th>
                  </tr>
                  <tr v-for="item in order.cart" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>{{item.quantity}} buc </td>
                  </tr>
              </table>
          </div>
          <div class="buttons">
              <button class="green" @click="remove(order.nrOrd)">Comanda onorata</button>
          </div>
      </div>
  </div>
</template>

<script>
    import Store from '../store/index.js'
    import { mapGetters } from 'vuex'

  export default {
    name: "Checkout",
    computed: mapGetters(['checkoutList']),
    methods:{
        remove(nr){
            for (let i = 0; i < this.checkoutList.length; i++) {
                if(nr == this.checkoutList[i].nrOrd){
                    this.checkoutList.splice(i, 1);
                    Store.commit('addToLength');
                }
            }
        }
    }
  }
</script>

<style scoped>
    #checkout{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .order{
        background: #fff;
        width: 250px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        padding: 15px;
        text-align: center;
    }
    .buttons{
        align-self: center;
    }
    table{
    }
    th, td{
        padding: 5px;
        text-align: left;
    }
    th{
        background-color: #42b983;
    }
    tr:nth-child(even) {
        background-color: #eee;
    }
</style>