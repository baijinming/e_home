<template>
  <div>
    <Header></Header>
    <div class="container">
      <div v-model="form">
        <p>旧密码：</p>
        <input type="password" v-model="form.oldPwd"/>
        <p>新密码：</p>
        <input type="password" v-model="form.newPwd"/>
        <p>确认密码：</p>
        <input type="password" v-model="testpwd"/>
        <button class="btn" @click="updatepwd">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        form: {
          oldPwd: '',
          newPwd: ''
        },
        testpwd: ''
      }
    },
    components: {
      Header
    },
    methods: {
      updatepwd() {
        if (this.testpwd != this.form.newPwd)  {
          this.$message.warning('两次输入密码不一致')
        }else {
          this.$axios.get('/hhdj/user/updatePwd.do', this.form).then(res => {
            if(res.code == 1) {
              this.$router.go(-1)
            }else {
              this.$message.warning('旧密码不正确')
            }
          })
        }
      }
    },
    created() {
      this.$store.commit('CHANGE_TITLE', '修改密码')
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 30px;
    font-size: 16px;
    color: #666;
    line-height: 40px;

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #666;
      border-radius: 4px;
    }

    input:focus {
      outline:none
    }

    .btn {
      height: 50px;
      width: 100%;
      margin-top: 20px;
      color: #fff;
      font-size: 20px;
      background-color: #ef473a;
      border: 1px solid #ef473a;
      border-radius: 4px;
    }
  }
</style>
