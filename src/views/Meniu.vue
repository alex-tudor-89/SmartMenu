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

    <router-view></router-view>

    <div id="checkout" v-show="showCart">
      <div class="checkoutContent">
        <CosDeCumparaturi />
        <button id="close" @click="modifyCartFalse">&#10006;</button>
      </div>
    </div>
  </div>
</template>

<script>
  import CosDeCumparaturi from "../components/CosDeCumparaturi";
  import Store from '../store/index.js'
  import {mapGetters} from 'vuex';

  export default {
  name: 'meniu',
  components: {CosDeCumparaturi},
    computed: mapGetters(['showCart']),
    methods:{
      modifyCartFalse(){
        Store.commit('hideCartContent')
      }
    }
  }
</script>

<style scoped>
  #menuView{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #meniu{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 5vh;
  }
  #checkout{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .checkoutContent{
    width: 25vw;
    border-radius: 45px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -30vh;
    margin-left: -12.5vw;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  #close{
    position: absolute;
    top: 10px;
    right: 10px;
    border: 3px solid #2c3e50;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: none;
    color: #2c3e50;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  #close:hover{
    color: red;
    cursor: pointer;
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
