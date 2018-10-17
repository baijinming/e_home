<template>
  <div class="login">
    <Header></Header>
    <div class="content">
      <img src="/static/imgs/logo.png" alt="">
      <form class="form">
        <input type="text" v-model="form.id_card" placeholder="身份证号"/>
        <input type="password" v-model="form.password" placeholder="密码"/>
        <button @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        form: {
          id_card: '',
          password: ''
        }
      }
    },
    components: {
      Header
    },
    methods: {
      login() {
        let formData = new FormData();
        formData.append('id_card', this.form.id_card);
        formData.append('password', this.form.password);
        this.$axios.post('/hhdj/user/userLogin.do', formData).then(res => {
          if(res.code == 1) {
            this.$store.commit('CHANGE_INFO', res.data)
            this.$store.commit('CHANGE_TOKEN', res.token)
            this.$router.push('/party')
          }
        })
      }
    },
    created() {
      this.$store.commit('CHANGE_TITLE', '登录')
      this.$store.commit('CHANGE_BACK', true)
    }
  }
</script>

<style scoped lang="scss">
  .login {
    height: 100vh;
    background-color: #c50206;
  }

  .content {
    padding: 0 30px;
    text-align: center;

    img {
      width: 4.1rem;
      height: 1rem;
      margin: 30px auto;
    }
  }

  .form {
    input {
      width: 100%;
      height: 40px;
      color: #fff!important;
      background-color: transparent;
      border: 1px solid #ffff00;
      border-radius: 4px;
      text-indent: 10px;
    }

    input:focus {
      outline:none
    }

    button {
      width: 100%;
      height: 40px;
      color: #fff;
      background-color: #e3574f;
      border: 1px solid #e3574f;
      border-radius: 4px;
    }
  }
</style>
