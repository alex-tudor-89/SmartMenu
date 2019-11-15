<template>
  <div id="meniu">
    <CategoriiDeProduse id="categorii"/>
    <DetaliiProduse id="detalii"/>
    <CosDeCumparaturi id="cos"/>
  </div>
</template>

<script>
import DetaliiProduse from "../components/DetaliiProduse";
import CategoriiDeProduse from "../components/CategoriiDeProduse";
import CosDeCumparaturi from "../components/CosDeCumparaturi";

export default {
  name: 'meniu',
  components: {
    CosDeCumparaturi,
    CategoriiDeProduse,
    DetaliiProduse,
  }
}
</script>

<style scoped>
  #meniu{
    display: grid;
    grid-template-areas:
            "categorii categorii"
            "detalii cos";
  }
  #categorii{
    grid-area: categorii;
  }
  #detalii{
    grid-area: detalii;

  }
  #cos{
    grid-area: cos;
  }
</style>
