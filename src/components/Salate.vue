<template>
    <div id="salate">
        <div v-for="salata in salate" :key="salata.id" id="container">
            <img :src="salata.img">
            <h3>{{ salata.name }}</h3>
            <h4>{{ salata.price }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Salate",
        data() {
            return {
                salate: [
                    {
                        id: 1,
                        name: 'Salata greceasca',
                        price: 'xx lei',
                        img: require('../assets/img/salate/Salata greceasca.jpg')
                    },
                    {
                        id: 2,
                        name: 'Salata de varza',
                        price: 'yy lei',
                        img: require('../assets/img/salate/Salata de varza.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #salate{
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