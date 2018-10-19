<template>
  <div>
    <Header></Header>
    <div class="imgs">
      <img v-for="(item, index) in headerBase " :key="index" :src="item" alt="">
      <label>
        <img src="/static/imgs/上传图片.png" alt="">
        <input style="display: none" type="file" @change="imgChange">
      </label>
    </div>
    <div class="addBtn" @click="addSummary">
      提交审核
    </div>
    <Hint v-if="hint" :title="hint"></Hint>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Hint from '../../components/hint'
  export default {
    data() {
      return {
        pic_list: [],
        headerBase: [],
        hint: ''
      }
    },
    components: {
      Header,
      Hint
    },
    methods: {
      imgChange(e) {
        let file = e.target.files[0];
        let filesize = file.size;
        let filename = file.name;
        // 2,621,440   2M
        if (filesize > 2101440) {
          // 图片大于2MB
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  (e) => {
          this.headerBase.push(e.target.result);
          let imgcode = e.target.result.replace('data:image/png;base64,', '');
          let formData = new FormData();
          formData.append("myFile", imgcode);
          this.$axios.post('/hhdj/image/uploadBase64.do', formData).then(res => {
            this.pic_list.push(res.url)
          })
        }
      },
      addSummary() {
        let form = new FormData();
        form.append('pic_list', this.pic_list);
        form.append('comment_id', '0');
        form.append('user_id', this.$store.state.token);
        this.$axios.post('/hhdj/nationComment/submitSummary.do', form).then(res => {
          this.hint = res.msg;
          setTimeout(() => {
            this.hint = '';
            if (res.code == 1) {
              this.$router.go(-1)
            }
          },2000)
        })
      }
    },
    created() {
      this.$store.commit('CHANGE_TITLE', '个人总结')
    }
  }
</script>

<style scoped lang="scss">
  .imgs {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 2.3rem;
      height: 2.3rem;
      margin: 20px 0.1rem;
    }
  }

  .addBtn {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    background-color: #ef473a;
    color: #fff;
    border-radius: 6px;
  }
</style>
