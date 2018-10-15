<template>
  <div class="header">
    <div v-if="!title" class="index-header clearfix">
      <img class="fll" src="/static/imgs/logo.png" alt="">
      <router-link class="flr" to="/login">登录</router-link>
    </div>

    <div v-else>
      <div v-if="title == '通知早知道'">
        {{title}}
      </div>
      <div v-else>
        <div></div>
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        text: {
          type: String
        }
      },
      data() {
        return {
          title: '',
        }
      },
      created() {
        this.title = this.$route.name
        console.log(this.text)
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
    background-color: #c50206;
  }

  .index-header {
    background-color: #c50206;
    height: 34px;
    padding: 5px;
    font-size: 17px;
    line-height: 34px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;

    img {
      height: 34px;
      width: 146px;
    }

    a {
      color: #fff;
    }

  }
</style>
