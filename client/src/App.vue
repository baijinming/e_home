<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .fll {
    float: left;
  }
  .flr {
    float: right;
  }
  .clearfix {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
</style>
