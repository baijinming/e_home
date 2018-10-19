<template>
  <div>
    <Header></Header>
    <img v-if="isLoading" class="loading" src="/static/imgs/loading.png" alt="">
    <div v-else class="index">
      <swiper class="index-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src='slide.imgUrl' alt="">
          <div class="title">{{slide.title}}</div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="six-menu">
        <div class="menu-item" @click="toList('信工新闻眼')">
          <img src="/static/imgs/icon_01.png" alt="">
          <p>信工新闻眼</p>
        </div>
        <div class="menu-item" @click="() => this.$router.push('/life')">
          <img src="/static/imgs/icon_03.png" alt="">
          <p>掌上组织生活</p>
        </div>
        <div class="menu-item" @click="() => this.$router.push('/interaction')">
          <img src="/static/imgs/icon_05.png" alt="">
          <p>党员云互动</p>
        </div>
        <div class="menu-item" @click="toList('党建一点通')">
          <img src="/static/imgs/icon_04.png" alt="">
          <p>党建一点通</p>
        </div>
        <div class="menu-item" @click="toList('党员亮身份')">
          <img src="/static/imgs/icon_02.png" alt="">
          <p>党员亮身份</p>
        </div>
        <div class="menu-item" @click="() => this.$router.push('/partyToday')">
          <img src="/static/imgs/icon_06.png" alt="">
          <p>党史上的今天</p>
        </div>
      </div>

      <div class="banner"></div>

      <div class="table">
        <div style="height: 3.3rem; width: 2.5rem"></div>
        <div style="display: flex; flex-wrap: wrap; width: 5rem">
          <div style="height: 50%; width: 2.5rem" @click="toList('随时随地学')"></div>
          <div style="height: 50%; width: 2.5rem" @click="toList('随时随地拍')"></div>
          <div style="height: 50%; width: 2.5rem" @click="toList('制度建设')"></div>
          <div style="height: 50%; width: 2.5rem" @click="toList('特色活动')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Header from '../../components/Header'
    export default {
      components: {
        swiper,
        swiperSlide,
        Header
      },
      data() {
        return {
          isLoading: false,
          swiperSlides: [],
          swiperOption: {
            autoplay: 3000,
            speed: 1000,
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      methods: {
        getSwiper() {
          this.isLoading = true;
          this.$axios.get('/hhdj/carousel/carouselList.do', {type: 0}).then(res => {
            this.swiperSlides = res.rows;
            this.isLoading = false
          })
        },
        toList(title) {
          this.$router.push('/list');
          this.$store.commit('CHANGE_TITLE', title);
          this.$store.commit('CHANGE_BACK', true)
        }
      },
      created() {
        this.getSwiper()
        this.$store.commit('CHANGE_TITLE', '')
      }
    }
</script>

<style scoped lang="scss">
  .loading {
    width: 7.5rem;
  }

  .index-swiper {
    height: 4rem;
    position: relative;

    img {
      height: 100%;
      width: 7.5rem;
    }

    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 20px;
      padding: 4px;
      background-color: rgba(0,0,0,.5);
      font-size: 12px;
      color: #fff;
      line-height: 20px;
    }

    .swiper-pagination {
      height: 20px;
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
    }
  }

  .six-menu {
    display: flex;
    flex-wrap: wrap;
    width: 7.5rem;
    background: url("/static/imgs/bt_bg.png");
    background-size: contain;

    .menu-item {
      width: 2.5rem;
      height: 100px;
      font-size: 12px;
      color: #444;
      text-align: center;

      img {
        width: 50px;
        height: 50px;
        margin: 10px;
      }
    }
  }

  .banner {
    width: 7.5rem;
    height: 1.8rem;
    background: url("/static/imgs/banner01.png") no-repeat;
    background-size: cover;
  }

  .table {
    background: url("/static/imgs/tese.png");
    background-size: contain;
    height: 3.3rem;
    width: 7.5rem;
    display: flex;
  }
</style>
