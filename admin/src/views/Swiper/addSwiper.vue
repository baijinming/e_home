<template>
  <div class="add-user">
    <el-form ref="form" :model="form">
      <el-form-item
        label="轮播图标题"
        prop="title"
        :rules="{required: true, message: '标题不能缺少', trigger: 'blur'}">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item
        label="轮播图图片"
        prop="img"
        :rules="{required: true, message: '图片不能缺少', trigger: 'blur'}">
        <ImgUpload v-model="form.img"></ImgUpload>
      </el-form-item>
      <el-form-item
        label="对应新闻"
        prop="title"
        :rules="{required: true, message: '对应新闻不能缺少', trigger: 'blur'}">
        <el-select v-model="form.newsId" placeholder="请选择">
          <el-option
            v-for="item in news"
            :key="item._id"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-switch
          v-model="form.type"
          active-text="显示"
          active-value='1'
          inactive-text="不显示"
          inactive-value='0' >
        </el-switch>
      </el-form-item>
      <el-button v-if="!isRedact" type="primary" @click="handleAdd">提交</el-button>
      <el-button v-else type="primary" @click="handleRedact">修改</el-button>
    </el-form>
  </div>
</template>

<script>
  import ImgUpload from '../../components/imgUpload'
  export default {
    data() {
      return {
        form: {
          title: '',
          img: '',
          newsId: '',
          type: '1'
        },
        news: [],
        isRedact: false
      }
    },
    components: {
      ImgUpload
    },
    methods: {
      getNews() {
        this.$axios.get('/news').then(res => {
          this.news = res.data
        })
      },
      getData(id) {
        this.$axios.get(`/swiper/${id}`).then(res => {
          this.form = res.data
        })
      },
      handleAdd() {
        this.$axios.post('/swiper/add', this.form).then(res => {
          if(res.code == 200) {
            this.$message.success('添加成功');
          }else {
            this.$message.warning(res.msg)
          }
        })
      },
      handleRedact() {
        this.$axios.put(`/swiper/${this.$route.params.id}`, this.form).then(res => {
          if(res.code == 200) {
            this.$message.success('修改成功');
          }else {
            this.$message.warning(res.msg)
          }
        })
      }
    },
    created() {
      this.getNews();
      if(this.$route.params.id) {
        this.getData(this.$route.params.id);
        this.isRedact = true
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
