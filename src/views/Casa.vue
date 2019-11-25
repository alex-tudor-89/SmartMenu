<template>
  <div class="casa">
    <div v-for="(order, index) in shoppingToPay" :key="order.index">
      <p>Comanda nr: {{ index + 1 }}</p>
      <table>
           <tr>
             <th>Produs</th>
             <th>Pret/buc</th>
             <th>Cantitate</th>
           </tr>
           <tr v-for="item in order" :key="item.id">
             <td>{{ item.name }}</td>
             <td>{{ item.price }} lei</td>
             <td>{{item.quantity}} buc </td>
           </tr>
      </table>
      <p>Pret total: {{ price[index] }}</p>
        <p>Index: {{ priceIndex }}</p>

        <button class="red">Anuleaza</button>
      <button class="green">Platit</button>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "casa",
    computed: mapGetters(['shoppingToPay', 'priceIndex', 'price']),

  }
</script>
