<template>
    <div class="layout">
      <router-view></router-view>
      <div style="height: 48px"></div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '../../components/Footer'
  export default {
    components: {
      Footer
    }
  }
</script>

<style scoped lang="scss">

</style>
