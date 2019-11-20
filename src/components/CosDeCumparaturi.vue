<template>
    <div id="cos">
        <h1>Cos de cumparaturi</h1>
        <span v-for="item in shopping" :key="item.index">
            {{ item }}
        </span><br><br>
        <button>CANCEL</button>
        <button>BUY</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "CosDeCumparaturi",
        computed: mapGetters(['shopping'])
    }
</script>

<style scoped>
    #cos{
        text-align: center;
        border: 2px solid #42b983;
        border-radius: 45px;
    }
</style>