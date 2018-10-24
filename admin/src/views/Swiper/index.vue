<template>
  <div class="user">
    <el-table
      :data="swipers"
      style="width: 100%">
      <el-table-column
        label="轮播图图片">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.img" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="轮播图标题">
      </el-table-column>
      <el-table-column
        prop="newsId.title"
        label="对应新闻">
      </el-table-column>
      <el-table-column
        label="是否显示">
        <template slot-scope="scope">
          <p v-text="scope.row.type == 1 ? '显示' :  '不显示'"></p>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="redact(scope.row._id)">编辑</el-button>
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
        swipers: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/swiper').then(res => {
          this.swipers = res.data
        })
      },
      remove(id) {
        this.$axios.delete(`/swiper/${id}`).then(res => {
          this.$message.success(res.msg)
          this.getData()
        })
      },
      redact(id) {
        this.$router.push(`/layout/redactSwiper/${id}`)
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
