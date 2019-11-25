<template>
  <div id="menuView">
    <div id="meniu">
      <router-link to="burgers">
        <img class="menuImg" src="../assets/img/menu/burgers.jpg" alt="">
        <h3>Burgers</h3>
      </router-link>
      <router-link to="crispy">
        <img class="menuImg" src="../assets/img/menu/crispy.jpg" alt="">
        <h3>Crispy</h3>
      </router-link>
      <router-link to="salate">
        <img class="menuImg" src="../assets/img/menu/salate.jpg" alt="">
        <h3>Salate</h3>
      </router-link>
      <router-link to="combo">
        <img class="menuImg" src="../assets/img/menu/combo.jpg" alt="">
        <h3>Combo</h3>
      </router-link>
      <router-link to="bauturi">
        <img class="menuImg" src="../assets/img/menu/bauturi.jpg" alt="">
        <h3>Bauturi</h3>
      </router-link>
    </div>
    <transition id="detalii" name="router-animation" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <router-view></router-view>
    </transition>
    <div id="checkout">
      <CosDeCumparaturi/>
    </div>
  </div>
</template>

<script>
  import CosDeCumparaturi from "../components/CosDeCumparaturi";

  export default {
  name: 'meniu',
  components: {CosDeCumparaturi}
  }
</script>

<style scoped>
  #menuView{
    display: grid;
    margin-top: 5vh;
    grid-template-rows: 1fr 3vh;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
            "meniu meniu"
            "detalii checkout";
  }
  #meniu{
    grid-area: meniu;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5vh;
  }
  #detalii{
    grid-area: detalii;
  }
  #checkout{
    grid-area: checkout;
  }
  .menuImg{
    height: 17vh;
    border-radius: 100%;
  }
  .menuImg:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  h3{
    text-align: center;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 10px;
    margin-right: 10px;
  }
  a:hover{
    transform: scale(1.15);
    transition: 0.5s;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
</style>
