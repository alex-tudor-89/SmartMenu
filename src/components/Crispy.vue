<template>
    <div id="crispy">
        <div v-for="crispy in crispys" :key="crispy.id" id="container">
            <img :src="crispy.img">
            <h3>{{ crispy.name }}</h3>
            <h4>{{ crispy.price }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Crispy",
        data() {
            return  {crispys: [
                    {
                        id: 1,
                        name: 'Crispy mic',
                        price: 'xx lei',
                        img: require('../assets/img/crispy/Crispy 5 buc.jpg')
                    },
                    {
                        id: 2,
                        name: 'Crispy mare',
                        price: 'yy lei',
                        img: require('../assets/img/crispy/Crispy 8 buc.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #crispy{
        display: flex;
        justify-content: space-around;
        margin-top: 10vh;
    }
    #container{
        text-align: center;
    }
    img{
        width: 25vw;
        border-radius: 40px;
    }
</style>