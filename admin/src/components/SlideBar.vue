<template>
  <el-menu
    :router="true"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-height: 100vh">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>管理员</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/layout/user">用户列表</el-menu-item>
        <el-menu-item index="/layout/addUser">添加用户</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>新闻管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/layout/news">新闻列表</el-menu-item>
        <el-menu-item index="/layout/addNews">添加新闻</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>轮播图管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/layout/swiper">轮播图列表</el-menu-item>
        <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "SlideBar"
    }
</script>

<style scoped>

</style>
