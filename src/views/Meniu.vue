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
    <div id="detalii">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meniu'
}
</script>

<style scoped>
  #meniu{
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
  }
  .menuImg{
    height: 17vh;
    border-radius: 30px;
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
  a.router-link-exact-active {
    color: #42b983;
  }
</style>
