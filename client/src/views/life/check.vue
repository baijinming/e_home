<template>
  <div>
    <Header></Header>
    <div>
      <div class="content">
        <img :src="img" alt="">
        <p>{{title}}</p>
      </div>
      <div class="backBtn" @click="() => this.$router.go(-1)">关闭</div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        type: 0,
        img: '',
        title: ''
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        switch (this.$route.params.id) {
          case '0':
            this.$store.commit('CHANGE_TITLE', '思想汇报');
            this.$axios.get('/hhdj/report/reportInfo.do', {user_id: this.$store.state.token}).then(res => {
              this.type = res.type;
            });
            break;
          case '1':
            this.$store.commit('CHANGE_TITLE', '心得总结');
            this.$axios.get('/hhdj/impress/checkByUserId.do?', {user_id: this.$store.state.token}).then(res => {
              this.type = res.type;
            });
            break;
          default:
            break;
        }
        this.choose();
      },
      choose() {
        switch (this.type) {
          case 0:
            console.log('111');
            this.img = '/static/imgs/reviewing.png';
            this.title = '正在审核中';
            break;
          case 1:
            this.img = '/static/imgs/pass.png';
            this.title = '审核通过';
            break;
          case 2:
            this.img = '/static/imgs/nopass.png';
            this.title = '审核失败';
            break;
          default:
            break;
        }
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .content {
    text-align: center;
    margin-top: 50px;

    img {
      width: 1.8rem;
      height: 1.8rem;
    }

    p {
      font-size: 0.28rem;
      color: #666;
    }
  }

  .backBtn {
    margin: 100px 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #c50206;
    font-size: 18px;
    color: #fff;
    border-radius: 6px;
  }
</style>
