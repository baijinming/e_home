<template>
  <el-menu
    default-active="2"
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
        <template slot="title">分组一</template>
        <el-menu-item index="1-1" @click="() => this.$router.push('/layout/user')">用户列表</el-menu-item>
        <el-menu-item index="1-2" @click="() => this.$router.push('/layout/addUser')">添加用户</el-menu-item>
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
