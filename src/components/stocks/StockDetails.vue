<template>
    <div>
        <Stock v-for="(stock, index) in stocks"
                   :stock="stock"
                   :key="index"
        ></Stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './BuyingStock.vue';

    export default {
        components: {
            Stock
        },
        computed: {
            ...mapGetters({
                stocks: 'getStocks'
            })
        }
    }
</script>

