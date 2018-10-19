<template>
  <div>
    <Header></Header>
    <div class="btns">
      <button class="btn" @click="() => this.$router.push('/personalsummary')">个人总结</button>
      <button class="btn" @click="() => this.$router.push('/review')">民主评议</button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    components: {
      Header
    }
  }
</script>

<style scoped lang="scss">
  .btns {
    position: absolute;
    top: 30%;
    width: 100%;
    text-align: center;

    .btn {
      width: 4rem;
      height: 1rem;
      background-color: #ef473a;
      color: #fff;
      font-size: 0.4rem;
      line-height: 1rem;
      text-align: center;
      border-radius: 6px;
      margin-bottom: 20px;
      border: none;
    }
    .btn:focus {
      outline: none;
    }
  }
</style>
