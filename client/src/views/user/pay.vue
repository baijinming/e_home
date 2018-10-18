<template>
  <div>
    <Header></Header>
    <div class="container">
      <p class="title">请选择支付方式</p>
      <div class="item clearfix" @click="() => this.isWeixin = true">
        <img class="fll" src="/static/imgs/微信.png" alt="">
        <p class="fll">微信</p>
        <img class="right flr" src="/static/imgs/right.png" alt="">
      </div>
      <div class="item clearfix" @click="() => this.isZhifubao = true">
        <img class="fll" src="/static/imgs/支付宝.png" alt="">
        <p class="fll">支付宝</p>
        <img class="right flr" src="/static/imgs/right.png" alt="">
      </div>
    </div>
    <div v-if="isWeixin || isZhifubao" class="mask" @click="maskout"></div>
    <div v-if="isWeixin" class="code">
      <p>微信支付</p>
      <img src="/static/imgs/wechat.png" alt="">
    </div>
    <div v-if="isZhifubao" class="code">
      <p>支付宝支付</p>
      <img src="/static/imgs/wechat.png" alt="">
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        isWeixin: false,
        isZhifubao: false
      }
    },
    components: {
      Header
    },
    methods: {
      maskout() {
        this.isWeixin = false;
        this.isZhifubao = false
      }
    },
    created() {
      this.$store.commit('CHANGE_TITLE', '交纳党费')
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 30px;
    font-size: 20px;
    color: #555;

    .title {
      color: #333;
      padding: 10px;
      border-bottom: 1.5px solid #e9e9e9;
    }
  }

  .item {
    padding: 10px;
    border-bottom: 1.5px solid #e9e9e9;

    img {
      width: 50px;
      height: 50px;
    }

    p {
      line-height: 50px;
      margin-left: 10px;
    }

    .right {
      width: 15px;
      height: 20px;
      margin-top: 15px;
    }
  }

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(102,102,102,.5);
  }
  .code {
    width: 270px;
    height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    background-color: #fff;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
    line-height: 30px;
  }
</style>
