<template>
  <div>
    <Header></Header>
    <div class="content">
      <img src="/static/imgs/timg.jpg" alt="">
      <div class="ul">
        <div class="ul-item" @click="toList('政治学习')">
          <img src="/static/imgs/icon1.png" alt="">
          <p>政治学习</p>
        </div>
        <div class="ul-item">
          <img src="/static/imgs/icon2.png" alt="">
          <p>思想汇报</p>
        </div>
        <div class="ul-item">
          <img src="/static/imgs/icon3.png" alt="">
          <p>心得总结</p>
        </div>
        <div class="ul-item">
          <img src="/static/imgs/icon4.png" alt="">
          <p>民主评议</p>
        </div>
        <div class="ul-item" @click="() => {this.$router.push('/map');this.$store.commit('CHANGE_TITLE', '流动党员找组织');}">
          <img src="/static/imgs/icon5.png" alt="">
          <p>流动党员找组织</p>
        </div>
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
      toList(title) {
        this.$router.push('/list');
        this.$store.commit('CHANGE_TITLE', title);
        this.$store.commit('CHANGE_BACK', true)
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    img {
      width: 7.5rem;
    }
  }

  .ul {
    display: flex;
    flex-wrap: wrap;
  }

  .ul-item {
    width: 2.5rem;
    text-align: center;
    padding: 15px 0;

    img {
      width: 1.7rem;
      height: 1.7rem;
    }

    p {
      font-size: 14px;
      color: #666;
    }
  }
</style>
