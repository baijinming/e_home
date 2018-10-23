<template>
  <div class="user">
    <el-table
      :data="news"
      style="width: 100%">
      <el-table-column
        label="头像"
        width="180">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.header" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="新闻标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contentText"
        label="描述"
        width="300">
      </el-table-column>
      <el-table-column
        prop="catagory.type"
        label="分类"
        width="250">
      </el-table-column>
      <el-table-column
        prop="author.userName"
        label="作者"
        width="250">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        news: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/news').then(res => {
          this.news = res.data
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .avatar {
    width: 50px;
    height: 50px;
  }
</style>
