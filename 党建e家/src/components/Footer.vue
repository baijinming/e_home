<template>
  <div class="footer">
    <router-link to="/index">
      <div :class="index == 1 ? 'footer-item btop' : 'footer-item'">
        <img :src="index == 1 ? '/static/imgs/党_red.png' :  '/static/imgs/党_grey.png'" alt="">
        <p :class="index == 1 ? 'textRed' : ''">首页</p>
      </div>
    </router-link>
    <router-link to="/inform">
      <div :class="index == 2 ? 'footer-item btop' : 'footer-item'">
        <img :src="index == 2 ? '/static/imgs/消息_red.png' :  '/static/imgs/消息_grey.png'" alt="">
        <p :class="index == 2 ? 'textRed' : ''">通知早知道</p>
      </div>
    </router-link>
    <router-link to="/party">
      <div :class="index == 3 ? 'footer-item btop' : 'footer-item'" v-on:click="index = 1">
        <img :src="index == 3 ? '/static/imgs/会员_red.png' :  '/static/imgs/会员_grey.png'" alt="">
        <p :class="index == 3 ? 'textRed' : ''">我的党建</p>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
      computed: {
        index: {
          get: function () {
            switch (this.$store.state.title) {
              case '':
                return 1;
              case '通知早知道':
                return 2;
              case '我的党建':
                return 3;
              default:
                break
            }
          },
          set: function () {

          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .footer {
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    font-size: 8px;
    display: flex;
    background-color: #fff;

    .footer-item {
      width: 2.5rem;
      padding: 5px 0;
      text-align: center;
      color: #999999;
      border-top: 2px solid transparent;

      img {
        height: 25px;
        width: 25px;
        margin: 0 auto;
      }
    }
  }

  .textRed {
    color: #c7000a;
  }
  .btop {
    border-top: 2px solid #c7000a!important;
  }
</style>
