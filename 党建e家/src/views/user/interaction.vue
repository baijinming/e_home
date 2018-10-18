<template>
  <div>
    <Header></Header>
    <div class="container">
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
            <p @click="repaly(item)">回复</p>
          </div>
        </div>
      </div>
    </div>
    <div class="addIcon" @click="() => this.isRedact = true"></div>
    <div v-if="isRedact" class="mask" @click="() => this.isRedact = false"></div>
    <div v-if="isRedact" class="postBox">
      <textarea class="post-content" v-model="content"/>
      <div class="btns">
        <div class="btn post-btn" @click="post">发布</div>
        <div class="btn cancel-btn" @click="() => this.isRedact = false">取消</div>
      </div>
    </div>

    <Hint v-if="hint" :title="hint"></Hint>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Hint from '../../components/hint'
  export default {
    data() {
      return {
        form: [],
        isRedact: false,
        content: '',
        hint: ''
      }
    },
    components: {
      Header,
      Hint
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/forum/forumList.do', {page: 1,rows: 10,type: 0,cates: 0}).then(res => {
          this.form = res.rows
        })
      },
      post() {
        if(!this.content){
          this.hint = '发布内容不能为空！';
          setTimeout(() => {
            this.hint = ''
          },2000)
        }else {
          let form = new FormData();
          form.append('content', this.content);
          form.append('type', '1');
          this.$axios.post('/hhdj/forum/saveForum.do', form).then(res => {
            if (res.code == 1){
              this.isRedact = false;
              this.getData();
              this.hint = res.msg;
              setTimeout(() => {
                this.hint = ''
              },2000)
            }
          })
        }
      },
      repaly(msg) {
        this.$router.push(`/replay`);
        this.$store.commit('CHANGE_COMMENT', msg)
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

  .addIcon {
    width: 56px;
    height: 56px;
    background-image: url('/static/imgs/nopass.png');
    background-size: cover;
    transform: rotateZ(45deg);
    position: fixed;
    bottom: 80px;
    right: 20px;
  }

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(50,50,50,.5);
    z-index: 998;
  }

  .postBox {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    z-index: 999;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f1f1f1;

    .post-content {
      width: 100%;
      height: 90px;
      border: none
    }
    .post-content:focus {
      outline: none;
    }

    .btns {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .btn {
        width: 35px;
        height: 30px;
        border-radius: 4px;
        line-height: 30px;
        text-align: center;
      }

      .post-btn {
        color: #fff;
        background-color: #ef473a;
      }

      .cancel-btn {
        background-color: #f8f8f8;
      }
    }
  }
</style>
