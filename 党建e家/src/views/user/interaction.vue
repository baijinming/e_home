<template>
  <div>
    <Header></Header>
    <div>
      <div class="item" v-for="(item, index) in form" :key="index">
        <div class="item-header">
          <img :src="item.header" alt="">
          <div class="item-title">
            <div class="flr item-label">党员互动</div>
            <p class="title">{{item.username}}</p>
            <div class="time">
              <img src="/static/imgs/时间%20历史记录%20计时%20钟表%20线性.png" alt="">
              <p>{{item.currentTime}}</p>
              <img src="/static/imgs/喇叭.png" alt="">
              <p>公开</p>
            </div>
          </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="item-footer clearfix">
          <div class="flr right">
            <img src="/static/imgs/回复.png" alt="">
            <p>回复</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        form: []
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/forum/forumList.do', {page: 1,rows: 10,type: 0,cates: 0}).then(res => {
          this.form = res.rows
        })
      }
    },
    created() {
      this.getData();
      this.$store.commit('CHANGE_TITLE', '党员云互动');
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style scoped lang="scss">
  .item {
    padding: 16px;
    color: #666;
    font-size: 16px;
    border-bottom: 10px solid #efefef;
  }

  .item-header {
    display: flex;
    width: 100%;

    img {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      margin-right: 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 500;
    }

    .item-title {
      width: 100%;
    }

    .item-label {
      height: 25px;
      width: 60px;
      font-size: 14px;
      line-height: 25px;
      text-align: center;
      color: #ff6262;
      border: 1.5px solid #ff6262;
      border-radius: 10px;
    }

    .time {
      display: flex;
      font-size: 12px;
      color: #888;

      img {
        width: 13px;
        height: 13px;
        margin: 2px;
      }
    }
  }

  .content {
    margin-top: 20px;
  }

  .item-footer {
    font-size: 14px;

    img {
      width: 14px;
      height: 14px;
      margin: 3px 5px 0 0;
    }

    .right {
      display: flex;
    }
  }
</style>
