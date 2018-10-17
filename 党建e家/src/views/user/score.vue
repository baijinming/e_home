<template>
  <div>
    <Header></Header>
    <div>
      <div class="user-score">
        {{totalScore}}
      </div>

      <div class="jifen" @click="() => this.$router.push('/integralList')">
        <img src="/static/imgs/lxjf.png" alt="">
        <div class="jifen-right clearfix">
          <p class="fll">积分明细</p>
          <img class="flr" src="/static/imgs/right.png" alt="">
        </div>
      </div>

      <div class="rules">
        <div class="rules-item rules-title clearfix">
          <p class="fll">积分规则</p>
          <img class="flr" src="/static/imgs/wenhao.png" alt="">
        </div>
        <div class="rules-item clearfix">
          <p class="fll">登录APP</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">完善个人信息</p>
          <p class="flr" style="color: #c50206;">2</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">查看积分</p>
          <p class="flr" style="color: #c50206;">1</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">按时交纳党费</p>
          <p class="flr" style="color: #c50206;">10</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">查看通知</p>
          <p class="flr" style="color: #c50206;">2</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">了解学院工作动态</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">上交思想汇报经审核通过</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">主动学习相关文件</p>
          <p class="flr" style="color: #c50206;">10</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">认真撰写心得总结并上交，经审核通过</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">提交个人总结，并参与评议</p>
          <p class="flr" style="color: #c50206;">2</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">积极参与互动</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">学习党建知识</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">学习党史</p>
          <p class="flr" style="color: #c50206;">10</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">创先争优事迹</p>
          <p class="flr" style="color: #c50206;">10</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">学党章，学习近平总书记系列讲话</p>
          <p class="flr" style="color: #c50206;">10</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">用镜头记录两学-做过程中令人感动的人和事</p>
          <p class="flr" style="color: #c50206;">3</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">关注并积极参与特色活动</p>
          <p class="flr" style="color: #c50206;">5</p>
        </div>
        <div class="rules-item clearfix">
          <p class="fll">制度化、常态化建设</p>
          <p class="flr" style="color: #c50206;">5</p>
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
        totalScore: ''
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/user/userInfo.do').then(res => {
          this.totalScore = res.data.totalScore
        })
      }
    },
    created() {
      this.getData()
      this.$store.commit('CHANGE_TITLE', '个人量化积分')
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style scoped lang="scss">
  .user-score {
    width: 7.5rem;
    height: 2.9rem;
    background: url('/static/imgs/jifen.png');
    background-size: cover;
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
    line-height: 2.9rem;
  }

  .jifen {
    height: 1.1rem;
    width: 7.5rem;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;

    img {
      width: 0.7rem;
      height: 0.7rem;
      margin-right: 0.2rem;
    }

    .jifen-right {
      width: 100%;
      font-size: 0.35rem;
      line-height: 0.7rem;
      color: #666;

      img {
        width: 0.16rem;
        height: 0.3rem;
        margin: 0.2rem 0;
      }
    }
  }

  .rules {
    font-size: 0.3rem;
    font-weight: 300;
    color: #666;

    .rules-item {
      height: 0.7rem;
      width: 7.5rem;
      color: #888;
      line-height: 0.7rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
    }

    .rules-title {
      font-weight: 500;
      color: #555;
      background-color: #eee;

      img {
        width: 0.36rem;
        height: 0.36rem;
        margin: 0.17rem 0;
      }
    }
  }
</style>
