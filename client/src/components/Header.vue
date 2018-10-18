<template>
  <div class="header">
    <div v-if="!title" class="index-header fixed clearfix">
      <img class="fll" src="/static/imgs/logo.png" alt="">
      <router-link class="flr" to="/login">登录</router-link>
    </div>

    <div v-else class="fixed">
      <div v-if="this.$store.state.needBack" class="return" v-on:click="$router.go(-1)"></div>
      {{title}}
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          title: '',
        }
      },
      created() {
        this.title = this.$store.state.title
      }
    }
</script>

<style scoped lang="scss">
  .header {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: relative;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: #c50206;
  }

  .index-header {
    height: 34px;
    padding: 5px;
    font-size: 17px;
    line-height: 34px;

    img {
      height: 34px;
      width: 146px;
    }

    a {
      color: #fff;
    }

  }

  .return {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(45deg);
  }
</style>
