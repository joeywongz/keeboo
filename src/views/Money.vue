<template>
    <div>
        <div class="nav-wrapper">
            <div class="content">
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>
                <p>Money.vue</p>

            </div>
            <Nav/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Money',
    })
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow: auto;
        border: 1px solid blue;
    }
</style>