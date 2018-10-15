<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
  import Header from '../../components/Header'
    export default {
      data() {
        return {
          info: ''
        }
      },
      components: {
        Header
      },
      methods: {
        getData() {
          let id = this.$route.params.id;
          this.$axios.get('/hhdj/news/newsContent.do', {newsId: id}).then(res => {
            this.info = res.data
          })
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped>

</style>
