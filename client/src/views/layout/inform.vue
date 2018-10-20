<template>
  <div>
    <Header :goback="false"></Header>
    <div class="news-item" v-for="(item, index) in info" :key="index" @click="lookDetail(item.newsId)">
      <img :src="item.pic" alt="">
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.currentTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
    export default {
      data() {
        return {
          info: []
        }
      },
      components: {
        Header
      },
      methods: {
        getData() {
          this.$axios.get('/hhdj/news/newsList.do', {page: 1, rows: 10, type: 2}).then(res => {
            this.info = res.rows
          })
        },
        lookDetail(id) {
          this.$router.push(`/detail/${id}`)
        }
      },
      created() {
        this.getData();
        this.$store.commit('CHANGE_TITLE', '通知早知道')
        this.$store.commit('CHANGE_BACK', false)
      }
    }
</script>

<style scoped lang="scss">
  .news-item {
    height: 2rem;
    width: 7.5rem;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    padding: 0.3rem 0.15rem;
    box-sizing: border-box;

    img {
      height: 1.4rem;
      width: 1.4rem;
    }

    .text {
      height: 1.4rem;
      width: 5.3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 0 0 0.4rem;

      .title {
        font-size: 16px;
        color: #444;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .time {
        font-size: 12px;
        color: #666;
      }
    }
  }
</style>
