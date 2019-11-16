<template>
    <div id="bauturi">
        <div id="container" v-for="bautura in bauturi" :key="bautura.id">
            <img :src="bautura.img">
            <h3>{{ bautura.name }}</h3>
            <h4>{{ bautura.price }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bauturi",
        data() {
            return {
                bauturi: [
                    {
                        id: 1,
                        name: 'Apa minerala / plata',
                        price: 'xx lei',
                        img: require('../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
                    },
                    {
                        id: 2,
                        name: 'Suc - gama pepsi',
                        price: 'yy lei',
                        img: require('../assets/img/bauturi/Gama pepsi.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #bauturi{
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