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
        <div class="header">
          <h1>Cos de cumparaturi</h1>
          <button id="close" @click="modifyCartFalse">&#10006;</button>
        </div>
        <div class="cos">
          <CosDeCumparaturi />
        </div>
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
    padding-bottom: 2vh;
    border-bottom: 3px solid #42b983;
  }

  @media (max-width: 1000px) {
    #meniu img{
      height: 10vh;
    }
  }
  @media (max-width: 600px){
    #meniu img{
      display: none;
    }
    .checkoutContent{
      background: black;

    }
  }
  @media (max-width: 400px){
    #meniu{
      flex-direction: column;
    }
    h3{
      margin: 2px;
    }
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
    background: white;
    width: 550px;
    border-radius: 24px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -30vh;
    margin-left: -275px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
    color: #2c3e50;
    border-radius: 45px;
    margin-bottom: 15px;
  }
  .header h1{
    margin: 0;
  }
  #close{
    border-radius: 100%;
    border: none;
    width: 25px;
    height: 25px;
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
  a.router-link-exact-active .menuImg{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>
