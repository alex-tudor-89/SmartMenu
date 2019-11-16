<template>
    <div id="burgers">
        <div id="container" v-for="burger in burgers" :key="burger.id">
            <img :src="burger.img">
            <h3>{{ burger.name }}</h3>
            <h4>{{ burger.price }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Burgers",
        data() {
         return {
             burgers: [
                 {
                     id: 1,
                     name: 'Burger Angus',
                     price: 'xx lei',
                     img: require('../assets/img/burgers/Burger Angus.jpg')
                 },
                 {
                     id: 2,
                     name: 'Burger vegetarian',
                     price: 'yy lei',
                     img: require('../assets/img/burgers/Burger vegetarian.jpg')
                 }
             ]
         }
        }
    }
</script>

<style scoped>
    #burgers{
        display: flex;
        justify-content: space-around;
        margin-top: 10vh;
    }
    #container{
        text-align: center;
    }
    img{
        width: 20vw;
        border-radius: 40px;
    }
</style>