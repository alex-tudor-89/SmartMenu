<template>
  <div class="casa">
    <div class="order" v-for="order in shoppingToPay" :key="order.index">
      <div class="content">
        <h3>Comanda nr: {{ order.nrOrd }}</h3>
        <table>
             <tr>
               <th>Produs</th>
               <th>Pret/buc</th>
               <th>Cantitate</th>
             </tr>
             <tr v-for="item in order.cart" :key="item.id">
               <td>{{ item.name }}</td>
               <td>{{ item.price }} lei</td>
               <td>{{item.quantity}} buc </td>
             </tr>
        </table>
      </div>
      <div class="buttons">
        <h4>Pret total: {{ order.price }} lei</h4>
        <button class="red" @click="remove(order.nrOrd)">Anuleaza</button>
        <button class="green" @click="prepareOrder(order.nrOrd)">Platit</button>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "casa",
    computed: mapGetters(['shoppingToPay', 'price', 'checkoutList']),
    methods: {
      remove(nr){
        for (let i = 0; i < this.shoppingToPay.length; i++) {
          if(nr == this.shoppingToPay[i].nrOrd){
            this.shoppingToPay.splice(i, 1)
          }
        }
      },
      prepareOrder(nr){
        for (let i = 0; i < this.shoppingToPay.length; i++) {
          if(nr == this.shoppingToPay[i].nrOrd){
            this.checkoutList.push(this.shoppingToPay[i]);
            this.remove(nr)

          }
        }
      }
    }
  }
</script>

<style scoped>
  .casa{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .order{
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
