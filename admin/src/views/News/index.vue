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
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button type="warning" @click="remove(scope.row._id)">删除</el-button>
        </template>
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
      },
      remove(id) {
        this.$axios.delete(`/news/${id}`).then(res => {
          this.$message.success(res.msg)
          this.getData()
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .user {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 2px 2px 2px #f1f3f5;
  }

  .avatar {
    width: 50px;
    height: 50px;
  }
</style>
