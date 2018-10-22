<template>
  <div class="user">
    <el-table
      :data="userInfo"
      style="width: 100%">
      <el-table-column
        label="头像"
        width="180">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.avatar" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="真实姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="idCardNumber"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="branchName"
        label="所属机构"
        width="300">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/user/user').then(res => {
          this.userInfo = res.data
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
