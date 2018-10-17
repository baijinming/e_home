<template>
  <div>
    <Header></Header>
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div>
          <p class="fll" style="font-size: 18px;">{{item.typeName}}</p>
          <p class="flr" style="color: #c50206;">+{{item.singleDesc}}</p>
        </div>
        <p style="font-size: 12px;">{{item.timeFormat}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    data() {
      return {
        list: []
      }
    },
    components:{
      Header
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/integral/integralList.do', {page: 1, rows: 10}).then(res =>{
          this.list = res.rows
        })
      }
    },
    created() {
      this.getData()
      this.$store.commit('CHANGE_TITLE', '积分明细')
    }
  }
</script>

<style scoped lang="scss">
  .list-item {
    height: 45px;
    padding: 15px;
    font-size: 14px;
    border-bottom: 1px solid #e9e9e9;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
