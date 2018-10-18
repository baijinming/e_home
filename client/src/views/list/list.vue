<template>
  <div class="list">
    <Header></Header>
    <div v-if="!isPhoto">
      <div class="list-item" v-for="(item, index) in lists" :key="index" @click="lookDetail(item.newsId)">
        <img :src="item.pic" alt="">
        <div class="item-title">
          <div  class="title">{{item.title}}</div>
          <div class="item-footer clearfix">
            <div class="fll">{{item.currentTime}}</div>
            <div class="flr"><img class="eye-icon" src="/static/imgs/eye.png" alt="">{{item.count}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="photos">
        <div class="photo-item" v-for="(item, index) in lists" :key="index" @click="lookDetail(item.newsId)">
          <img :src="item.pic" alt="">
          <p>{{item.title}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        lists: [],
        type: 0,
        isPhoto: false
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/news/newsList.do', {page: 1, rows: 10, type: this.type}).then(res=> {
          this.lists = res.rows
        })
      },
      lookDetail(id) {
        this.$router.push(`/detail/${id}`)
      }
    },
    created() {
      switch (this.$store.state.title) {
        case '信工新闻眼':
          this.type = 0;
          break;
        case '特色活动':
          this.type = 1;
          break;
        case '党建一点通':
          this.type = 3;
          break;
        case '制度建设':
          this.type = 4;
          break;
        case '党员亮身份':
          this.type = 5;
          break;
        case '随时随地学':
          this.type = 6;
          break;
        case '随时随地拍':
          this.type = 7;
          this.isPhoto = true
          break;
        case '政治学习':
          this.type = 8;
          break;
        default:
          break;
      }
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .list-item {
    height: 100px;
    width: 7.5rem;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #e9e9e9;

    img {
      width: 80px;
      height: 80px;
    }
  }

  .item-title {
    margin-left: 0.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 16px;
      color: #333;
    }

    .item-footer {
      font-size: 10px;
      color: #999;

      .eye-icon {
        width: 14px;
        height: 15px;
        float: left;
        margin-right: 5px;
      }
    }
  }

  .photos {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 7.5rem;

    .photo-item {
      width: 3.75rem;
      padding: 0.3rem;
      box-sizing: border-box;

      img {
        width: 3.15rem;
        height: 2.3rem;
      }

      p {
        font-size: 14px;
        color: #666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
</style>
