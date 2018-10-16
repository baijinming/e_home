<template>
  <div>
    <Header></Header>
    <div class="text">
      <h1 class="title">{{info.title}}</h1>
      <div class="content" v-html="info.content"></div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
    export default {
      data() {
        return {
          info: ''
        }
      },
      components: {
        Header
      },
      methods: {
        getData() {
          let id = this.$route.params.id;
          this.$axios.get('/hhdj/news/newsContent.do', {newsId: id}).then(res => {
            this.info = res.data
          })
        }
      },
      created() {
        this.getData()
        this.$store.commit('CHANGE_BACK', true)
      }
    }
</script>

<style lang="scss">
  .text {
    width: 7rem;
    margin: 20px auto;
    overflow: hidden;

    .title {
      font-size: 20px;
      color: #333;
    }

    .content {
      font-size: 14px;
      margin-top: 20px;
      line-height: 1.5;

      img {
        width: 100%;
      }
    }
  }
</style>
