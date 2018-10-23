<template>
  <div class="header clearfix">
    <el-breadcrumb class="fll" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="flr" @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        更多选择<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="flr">
      <img class="avatar" :src="this.$store.state.userInfo.avatar" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'loginOut' :
            this.loginOut();
            break;
          default:
            break;
        }
      },
      loginOut() {
        console.log('1111')
        this.$message.success('退出成功')
        this.$store.commit('UPDATE_TOKEN', null)
        this.$store.commit('UPDATE_INFO', null)
        setTimeout(() => {
          this.$router.push('/login')
        },1000)
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 50px;
    padding:15px;
    box-sizing: border-box;
    background-color: #fff;
  }

  .avatar {
    height: 30px;
    width: 30px;
    margin-right: 20px;
    margin-top: -5px;
  }
</style>
