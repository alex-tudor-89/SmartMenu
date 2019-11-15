<template>
  <div id="categorii">
    <ul v-bind:key="categorie.id" v-for="categorie in categorii">
      <li>{{ categorie.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CategoriiDeProduse",
    data() {
      return{
        categorii: [
          {id: 1, name: 'Burgers'},
          {id: 2, name: 'Crispy'},
          {id: 3, name: 'Salate'},
          {id: 4, name: 'Bauturi'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>