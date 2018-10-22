<template>
  <el-upload
    class="my-upload"
    action="https://upload-z1.qiniup.com"
    :show-file-list="false"
    :data="uploadData"
    :on-success="handleAvatarSuccess">
    <img class="upload-icon" v-if="imageUrl" :src="imageUrl">
    <i class="el-icon-plus my-upload-icon" v-else ></i>
  </el-upload>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      value: {
        type: String
      },
    },
    data() {
      return {
        imageUrl: '',
        uploadData: {
          token: ''
        }
      }
    },
    methods: {
      handleAvatarSuccess(file) {
        this.$emit('input', file.url)
      },
      getToken () { // 获取上传凭证
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.uploadData.token = res.data.data
        })
      }
    },
    watch: {
      value(val) {
        this.imageUrl = val
      }
    },
    created() {
      this.getToken()
    }
  }
</script>

<style scoped>
  .my-upload {
    position: relative;
    float: left;
    display: block;
    border: 1px solid #f1f1f1;
    width: 60px;
    height: 60px;
  }
  .my-upload .upload-icon {
    display: block;
    width: 100%;
  }

  .my-upload-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #aaa;
    font-size: 24px;
  }
</style>
