<template>
  <div>
    <Header></Header>
    <div class="text">
      <div class="title">党史上的今天</div>
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import {getUrl} from '../../utils/todayUrl'
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
        let url = getUrl();
        console.log(url)
        this.$axios.get(`/hhdj/proxy/proxy.do`, {url}).then(res => {
          let cheerio = require("cheerio");
          let $ = cheerio.load(res);
          $("h1").remove();
          this.content = $(".p1_02").html();

          //正则切割
          // let info = res.match(/<h1 class="red">党史上的今天<\/h1>[\s\S]*?(?=<\/div>)/);
          // this.content = info[0];
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

    .title {
      font-size: 28px;
      margin: 10px 0;
    }

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
