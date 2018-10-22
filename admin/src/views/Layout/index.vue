<template>
  <div>
    <el-col :span="4">
      <SlideBar></SlideBar>
    </el-col>
    <el-col :span="20" style="height: 100vh; overflow: hidden; background-color: #f1f1f1;">
      <Header></Header>
      <div style="padding: 30px;box-sizing: border-box; bgc">
        <router-view></router-view>
      </div>
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
