<template>
  <div>
    <Header></Header>
    <div>
      <div class="clearfix item" v-for="(item, index) in list" :key="index">
        <img class="fll" :src="item.header" alt="">
        <p class="fll" style="font-size: 16px;">{{item.username}}</p>
        <p class="flr" style="color: #666">{{item.branchName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/nationComment/userList.do', {page: 1, rows: 20, select_branch: this.$route.params.select_branch, user_id: this.$store.state.token}).then(res => {
          this.list = res.rows
        })
      }
    },
    created() {
      this.getData();
      this.$store.commit('CHANGE_TITLE', '参评党员')
    }
  }
</script>

<style scoped lang="scss">
  .item {
    font-size: 14px;
    padding-right: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e9e9e9;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 10px;
    }
    p {
      line-height: 50px;
    }
  }
</style>
