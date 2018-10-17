<template>
  <div>
    <Header></Header>
    <div class="text">
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        content: ''
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html').then(res => {
          let info = res.match(/(?=<div class="p1_02 clearfix width884">)[\s\S]*?(?=<\/div>)/);
          this.content = info[0].replace('<div class="p1_02 clearfix width884">', '')
        })
      }
    },
    created() {
      this.getData();
      this.$store.commit('CHANGE_TITLE', '党史上的今天');
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style lang="scss">
  .text {
    width: 7rem;
    margin: 0 auto;
    overflow: hidden;

    .content {
      font-size: 14px;
      line-height: 1.5;

      img {
        width: 100%;
      }
    }
  }

  h1 {
    color: #333;
    font-weight: 500;
    margin: 10px auto;
  }

  h2 {
    font-size: 19px;
    color: #333;
    font-weight: 400;
    margin: 10px auto;
  }

  p {
    line-height: 2;
  }
</style>
