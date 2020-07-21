<template>
    <div>

    <Nav/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Nav from '@/components/Nav.vue'

    export default Vue.extend({
        name: 'Money',
        components: {Nav}
    })
</script>

<style scoped>

</style>