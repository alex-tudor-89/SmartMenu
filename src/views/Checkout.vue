<template>
  <div id="checkout">
    <h1>Client ptr checkout</h1>
    <p v-for="item in checkoutList" :key="item.index">
      {{ item }}
    </p>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Checkout",
    computed: mapGetters(['checkoutList'])
  }
</script>

<style scoped>

</style>