<template>
    <nav class="nav">
      <Icon name="money"/>
      <router-link to="/Money" class="item">记账</router-link>
      <Icon name="label"/>
      <router-link to="/Labels" class="item">标签</router-link>
      <Icon name="chart"/>
      <router-link to="/Statistics" class="item">统计</router-link>
    </nav>
</template>

<script lang="ts">


  export default ({
      name: 'Nav'
  })
</script>

<style lang="scss" scoped>
  nav{
    display: flex;

    > .item {

    }
  }

</style>