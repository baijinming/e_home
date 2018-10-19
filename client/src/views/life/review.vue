<template>
  <div>
    <Header></Header>
    <div class="review">
      <div class="title">评议须知</div>
      <div class="content" v-html="content"></div>
      <div class="choose">
        <select v-model="select_branch" class="select" name="" id="">
          <option value="">请选择</option>
          <option v-for="(item, index) in allSelect" :key="index" :value="item.id">{{item.branch}}</option>
        </select>
        <div class="toPartys" @click="next">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        content: '',
        select_branch: '',
        allSelect: ''
      }
    },
    components: {
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/nationComment/getComment.do').then(res => {
          this.content = res.content
        })
        this.$axios.get('/hhdj/branch/findAll.do').then(res => {
          this.allSelect = res.rows
        })
      },
      next() {
        if (this.select_branch) {
          this.$router.push(`/partyMember/${this.select_branch}`)
        }
      }
    },
    created() {
      this.getData()
      this.$store.commit('CHANGE_TITLE', '民主评议')
    }
  }
</script>

<style scoped lang="scss">
  .review {
    padding: 10px;
    box-sizing: border-box;
  }

  .title {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
    text-align: center;
  }

  .content {
    font-size: 14px;
    line-height: 1.5;
    color: #666;
  }

  .choose {
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    margin-top: 50px;

    .select {
      height: 40px;
      width: 3.8rem;
      color: #fff;
      background-color: #c50206;
      border-radius: 6px;
      text-indent: 10px;
    }
    .select:focus {
      outline: none;
    }

    .toPartys {
      height: 40px;
      width: 80px;
      color: #fff;
      background-color: #c50206;
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
    }
  }
</style>
