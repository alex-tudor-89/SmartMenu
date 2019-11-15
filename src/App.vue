<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Meniu</router-link> |
      <router-link to="/casa">Casa</router-link> |
      <router-link to="/checkout">Checkout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 20px 0px;
  width: 100%;
  background: lightgrey;
  display: flex;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
