<template>
  <div>
    <Header :text="111"></Header>
    <div class="news-item" v-for="(item, index) in info" :key="index" v-on:click="lookDetail(item.newsId)">
      <img :src="item.pic" alt="">
      <div class="text">
        <p class="title">{{item.title}}</p>
        <p class="time">{{item.currentTime}}</p>
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
          this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
            this.info = res.rows
          })
        },
        lookDetail(id) {
          this.$router.push(`/detail/${id}`)
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .news-item {
    height: 100px;
    border-bottom: 1px solid #888;
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    img {
      height: 70px;
      width: 70px;
      margin-top: 5px;
    }

    .text {
      margin-left: 20px;

      .title {
        font-size: 16px;
        color: #444;
        margin-top: 5px;
      }

      .time {
        font-size: 12px;
        color: #666;
        margin-top: 10px;
      }
    }
  }
</style>
