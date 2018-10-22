<template>
  <div>
    <el-col :span="4">
      <SlideBar></SlideBar>
    </el-col>
    <el-col :span="20">
      <Header></Header>
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import SlideBar from '../../components/SlideBar'
  export default {
    components: {
      Header,
      SlideBar
    }
  }
</script>

<style scoped>

</style>
