<template>
    <div class="nav">
      <router-link to="/Money">记账</router-link>|
      <router-link to="/Labels">标签</router-link>|
      <router-link to="/Statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
    import icons from '@/assets/icons/money.svg'

    console.log(icons)
    export default ({
        name: 'Nav'
    })
</script>

<style lang="scss" scoped>
  .nav{
    border: 1px solid red;
  }
</style>