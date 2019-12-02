<template>
  <div id="app">
      <div class="dropdown">
          <i class="menu fa fa-th-large fa-2x menuIcon"></i>
          <div id="nav">
              <div><router-link to="/">Meniu</router-link></div>
              <div><router-link to="/casa">Casa</router-link></div>
              <div><router-link to="/checkout">Checkout</router-link></div>
          </div>
      </div>
    <router-view/>
  </div>
</template>



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
        padding: 15px;
        width: 100px;
        background: white;
        border: 2px solid #42b983;
        border-radius: 25px;
        display: none;
        z-index: 1;
        position: absolute;
    }
    #nav div{
        margin-bottom: 10px;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .dropdown:hover #nav {
        display: block;
    }
    .menuIcon{
        color: #42b983;
    }
    .menuIcon:hover{
        color: #2c3e50;

    }
</style>
