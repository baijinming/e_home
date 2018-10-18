<template>
  <div style="background-color: #efefef;min-height: 100vh">
    <Header></Header>
    <div class="comment">
      <div class="observer">
        <img :src="comment.header" alt="">
        <div class="observer-title">
          <p class="title">{{comment.username}}</p>
          <div class="time">
            <img src="/static/imgs/时间%20历史记录%20计时%20钟表%20线性.png" alt="">
            <p>{{comment.currentTime}}</p>
          </div>
        </div>
      </div>
      <div class="content">
        {{comment.content}}
      </div>
    </div>

    <div class="list-item" v-for="(item, index) in replay" :key="index">
      <div class="observer">
        <img :src="item.header" alt="">
        <div class="observer-title">
          <p class="title">{{item.username}}</p>
          <div class="time">
            <img src="/static/imgs/时间%20历史记录%20计时%20钟表%20线性.png" alt="">
            <p>{{item.timeFormat}}</p>
          </div>
        </div>
      </div>
      <div class="content">
        {{item.comment}}
      </div>
    </div>

    <div style="height: 50px"></div>

    <div class="replay">
      <input type="text" v-model="content" placeholder="评论内容">
      <div class="replay-btn" @click="addReplay">评论</div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        comment: {},
        replay: [],
        content: ''
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/forum/forumCommentList.do', {page: 1, rows: 10, forum_id: this.comment.forumId}).then(res => {
          this.replay = res.rows
        })
      },
      addReplay() {
        let form = new FormData();
        form.append('forum_id', this.comment.forumId);
        form.append('comment', this.content);
        this.$axios.post('/hhdj/forum/addComment.do', form).then(res => {
          this.replay.unshift(res.data)
        })
      }
    },
    created() {
      this.comment = this.$store.state.comment
      this.getData();
    }
  }
</script>

<style scoped lang="scss">
  .comment {
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
  }

  .observer {
    display: flex;
    width: 100%;

    img {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #555;
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

  .content {
    font-size: 16px;
    color: #666;
    margin: 10px 0;
  }

  .list-item {
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 2px;
  }

  .replay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    input {
      outline: none;
      width: 80%;
      border: 1px solid #c50206;
      text-indent: 10px;
      border-radius: 4px;
    }
    input:focus {
      outline: none;
    }

    .replay-btn {
      height: 30px;
      width: 40px;
      font-size: 14px;
      color: #fff;
      background-color: #c50206;
      text-align: center;
      line-height: 30px;
      border-radius: 4px;
    }
  }

</style>
