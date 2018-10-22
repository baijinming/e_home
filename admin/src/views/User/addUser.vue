<template>
  <div class="add-user">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户头图">
        <ImgUpload v-model="form.avatar"></ImgUpload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.idCardNumber"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址">
        <el-input v-model="form.homeAddress"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form.workAddress"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleAdd">提交</el-button>
    </el-form>
  </div>
</template>

<script>
  import ImgUpload from '../../components/imgUpload'
  export default {
    data() {
      return {
        form: {
          idCardNumber: '',
          avatar: '',
          pwd: '',
          homeAddress: '',
          workAddress: ''
        }
      }
    },
    components: {
      ImgUpload
    },
    methods: {
      handleAdd() {
        this.$axios.post('/user/add', this.form, {headers: {'token': this.$store.state.token}}) .then(res => {
          if(res.code == 200) {
            this.$message.success(res.msg);

          }else {
            this.$message.warning(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .add-user {
    background: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
  }
</style>
