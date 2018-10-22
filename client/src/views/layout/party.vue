<template>
  <div>
    <Header></Header>
    <div class="party">
      <div class="author-icon">
        <img :src="this.$store.state.token ? this.$store.state.userInfo.header : '/static/imgs/bt_bg.png'" alt="">
        <p v-text="this.$store.state.token ? this.$store.state.userInfo.username : '你还没有登录，请登录'" @click="() => this.$router.push('/login')"></p>
      </div>

      <div class="menu">
        <div class="menu-item clearfix" @click="() => this.$router.push(this.$store.state.userInfo ? '/info' : '/login')">
          <img class="fll icon" src="/static/imgs/person.png" alt="">
          <p class="fll">个人信息</p>
          <img class="flr right" src="/static/imgs/right.png" alt="">
        </div>
        <div class="menu-item clearfix" @click="() => this.$router.push(this.$store.state.userInfo ? '/score' : '/login')">
          <img class="fll icon" src="/static/imgs/lxjf.png" alt="">
          <p class="fll">个人量化积分</p>
          <img class="flr right" src="/static/imgs/right.png" alt="">
        </div>
        <div class="menu-item clearfix" @click="() => this.$router.push(this.$store.state.userInfo ? '/updatepwd' : '/login')">
          <img class="fll icon" src="/static/imgs/xgmm.png" alt="">
          <p class="fll">修改密码</p>
          <img class="flr right" src="/static/imgs/right.png" alt="">
        </div>
        <div class="menu-item clearfix" @click="() => this.$router.push(this.$store.state.userInfo ? '/pay' : '/login')">
          <img class="fll icon" src="/static/imgs/icon3.png" alt="">
          <p class="fll">党费缴纳</p>
          <img class="flr right" src="/static/imgs/right.png" alt="">
        </div>
      </div>

      <div v-if="this.$store.state.userInfo">
        <button class="login-out" @click="loginout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
    export default {
      components: {
        Header
      },
      methods: {
        loginout() {
          this.$store.commit('CHANGE_INFO', null);
          this.$store.commit('CHANGE_TOKEN', null);
          this.$router.push('/login')
        }
      },
      created() {
        this.$store.commit('CHANGE_TITLE', '我的党建')
        this.$store.commit('CHANGE_BACK', false)
      }
    }
</script>

<style scoped lang="scss">
  .author-icon {
    height: 2.8rem;
    background-color: #c50206;
    text-align: center;

    img {
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 0.5rem;
    }

    p {
      font-size: 14px;
      color: #fff;
    }
  }

  .menu-item {
    height: 54px;
    border-bottom: 1px solid #e9e9e9;
    font-size: 18px;
    color: #888;

    .icon {
      width: 32px;
      height: 32px;
      margin: 11px 10px;
    }
    p {
      margin-top: 15px;
    }
    .right {
      width: 8px;
      margin: 20px 10px;
    }
  }

  .login-out {
    height: 50px;
    width: 90%;
    margin: 30px 5%;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    background-color: #ef473a;
    border: 1px solid #ef473a;
    border-radius: 4px;
  }
</style>
