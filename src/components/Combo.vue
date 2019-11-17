<template>
    <div id="combo">
        <div id="container" v-for="combo in allCombos" :key="combo.id">
            <div class="imgs">
                <img :src="combo.img1">
                <img :src="combo.img2">
            </div>
            <h3>{{ combo.name }}</h3>
            <h4>{{ combo.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Combo",
        computed:  mapGetters(
            [
                'allCombos',
                'allCrispys',
                'allBurgers',
                'allSalads',
                'allDrinks'
            ]
        )
    }
</script>

<style scoped>
    #combo{
        display: flex;
        flex-direction: column;
    }
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .imgs{
        display: flex;
        flex-direction: row;
    }
    .imgs img{
        width: 10vw;
        border-radius: 40px;
    }
</style>