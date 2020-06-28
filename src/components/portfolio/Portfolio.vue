<template>
    <div>
        <div v-if="stockPortfolio.length">
            <OwnStock  v-for="(stock, index) in stockPortfolio"
                       :stock="stock"
                       :key="index"
            ></OwnStock>
        </div>
        <div v-else class="no-stocks">
            <h1><span>No Stocks Available</span></h1>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import OwnStock from "./OwnStock";

    export default {
        computed: {
            ...mapGetters({
                stockPortfolio: 'getStockPortfolio'
            })
        },
        components: {
            OwnStock
        }
    }
</script>

<style scoped>
    .no-stocks {
        text-align: center;
    }
</style>