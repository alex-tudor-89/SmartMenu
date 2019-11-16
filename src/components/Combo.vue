<template>
    <div id="combo">
        <div id="container" v-for="combo in combos" :key="combo.id">
<!--            <img :src="combo.img">-->
            <h3>{{ combo.name }}</h3>
            <h4>{{ combo.price }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Combo",
        data() {
            return {
                combos: [
                    {
                        id: 1,
                        name: 'Crispy + Suc',
                        price: 'xx lei',
                        // img: require('../assets/img/burgers/Burger Angus.jpg')
                    },
                    {
                        id: 2,
                        name: 'Crispy + Apa',
                        price: 'yy lei',
                        // img: require('../assets/img/burgers/Burger vegetarian.jpg')
                    },
                    {
                        id: 3,
                        name: 'Crispy + salata la alegere',
                        price: 'xx lei',
                        // img: require('../assets/img/burgers/Burger Angus.jpg')
                    },
                    {
                        id: 4,
                        name: 'Burger la alegere + Apa',
                        price: 'yy lei',
                        // img: require('../assets/img/burgers/Burger vegetarian.jpg')
                    },
                    {
                      id: 5,
                      name: 'Burger la alegere + Suc'
                        // img: require('../assets/img/burgers/Burger vegetarian.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #combo{
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