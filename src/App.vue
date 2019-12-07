<template>
  <div id="app">
      <div class="mainNav">
          <div class="dropdown">
            <div >
              <i class="menu fa fa-th-large fa-2x menuIcon"></i>
              <div id="nav">
                  <div class="menuItem">
                    <router-link to="/">Meniu</router-link>
                  </div>
                  <div class="menuItem">
                    <router-link to="/casa">Casa</router-link>
                    <div class="counter" v-show="showOrNot(this.shoppingToPay)">{{ shoppingToPay.length }}</div>
                  </div>
                <div class="menuItem">
                  <router-link to="/checkout" >Checkout</router-link>
                  <div class="counter" v-show="showOrNot(this.checkoutList)">{{ checkoutList.length }}</div>
                </div>
              </div>
          </div>
            <div class="counterTotal" v-show="showLength()">{{ allLength }}</div>
          </div>
          <div style="width: 20px;">
              <div class="shopping" @click="modifyCartTrue">
                  <i class="shoppingCart fa fa-shopping-cart" aria-hidden="true"></i>
                  <div class="cart" v-show="showShoppingPrice()">
                      <div class="cartContent" v-for="item in shopping" :key="item.index">
                          <p>{{ item.quantity }} * {{ item.name }}</p>
                      </div>
                      <p v-show="showShoppingPrice()"><b>Pret: {{ price }} lei</b></p>
                  </div>
              </div>
              <div class="shoppingCounter" v-show="showShoppingPrice()">{{ shopping.length }}</div>
          </div>
      </div>

      <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Store from './store/index.js';

  export default {
      computed: mapGetters(['shoppingToPay', 'checkoutList', 'allLength', 'shopping', 'price']),
    methods: {
      showShoppingPrice(){
          if(this.shopping.length == 0) {
              return false;
          } else {
              return true;
          }
      },
      showOrNot(array){
        if(array.length == 0){
          return false;
        } else {
          return true;
        }
      },
      showLength(){
        if(this.allLength == 0){
          return false;
        } else {
          return true;
        }
      },
      modifyCartTrue(){
          Store.commit('showCartContent')
      }
    }
  }

</script>

<style>

    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    body{
        background: cornsilk;
        margin-left: 10vw;
        margin-right: 10vw;
    }
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .mainNav{
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .menu{
      position: relative;
    }
    .menu:hover{
        cursor: pointer;
    }
    .green, .red{
        color: white;
        padding: 12px 7px;
        border-radius: 5px;
        border: none;
        min-width: 100px;

    }
    .green{
        background: #42b983;
    }
    .green:hover{
        background: #2c3e50;
        cursor: pointer;
    }
    .red{
        background: crimson;
    }
    .red:hover{
        background: #2c3e50;
        cursor: pointer;
    }
    .red-small{
        background: crimson;
        border: none;
        border-radius: 5px;
        color: white;
    }
    .red-small:hover{
        background: #2c3e50;
        color: white;
    }
    .btn-small{
        border: none;
        border-radius: 5px;
    }
    .btn-small:hover{
        background: lightgray;
    }
    #nav {
        display: none;
        padding: 15px;
        width: 120px;
        background: white;
        border: 2px solid #42b983;
        border-radius: 25px;
        z-index: 1;
        position: absolute;
    }
    .menuItem{
      height: 30px;
    }
    #nav div{
        margin-bottom: 10px;
        display: flex;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .dropdown{
        width: 30px;
    }
    .dropdown:hover #nav{
        display: block;
    }
    .menuIcon{
        color: #42b983;
    }
    .menuIcon:hover{
        color: #2c3e50;

    }
    .counter{
      border-radius: 100%;
      width: 20px;
      height: 20px;
      background-color: red;
      color: #fff;
      font-weight: bolder;
      margin-left: 2vh;
      justify-content: center;
      align-items: center;
    }
    .counterTotal{
      text-align: center;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      background: red;
      font-weight: bolder;
      color: #fff;
      position: relative;
      top: -15px;
      left: 15px;
    }
    .shopping{
        font-size: 2em;
        color: #42b983;
        position: absolute;
    }
    .cart{
        font-size: 0.5em;
        display: none;
        background: white;
        border: 2px solid #42b983;
        border-radius: 25px;
        z-index: 1;
        position: absolute;
        right: 0;
        width: 150px;
        padding: 15px;
    }
    .shopping:hover .cart{
        display: block;
    }
    .shopping:hover{
        cursor: pointer;
        color: #2c3e50;
    }
    .shoppingCounter{
        background: cornflowerblue;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 100%;
        font-weight: bolder;
        color: #fff;
        position: relative;
        top: 20px;
        left: 20px;
    }
</style>
