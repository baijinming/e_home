<template>
  <div class="add-user">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        label="新闻头图"
        prop="header"
        :rules="{required: true, message: '图片必须上传', trigger: 'blur'}"
        >
        <ImgUpload v-model="form.header"></ImgUpload>
      </el-form-item>
      <el-form-item label="新闻标题"
                    prop="title"
                    :rules="{required: true, message: '标题必须添加', trigger: 'blur'}">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="新闻内容"
                    prop="content"
                    :rules="{required: true, message: '内容不能为空', trigger: 'blur'}">>
        <quill-editor
          v-model="form.content"
          ref="myQuillEditor"
          :options="editorOption"
          @change="handleContent"
        >
        </quill-editor>
      </el-form-item>
      <el-form-item label="作者"
                    prop="author"
                    :rules="{required: true, message: '必须选择', trigger: 'blur'}">
        <el-select v-model="form.author" placeholder="请选择">
          <el-option
            v-for="item in users"
            :key="item._id"
            :label="item.userName"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类"
                    prop="catagory"
                    :rules="{required: true, message: '必须选择', trigger: 'blur'}">
        <el-select v-model="form.catagory" placeholder="请选择">
          <el-option
            v-for="item in catagories"
            :key="item._id"
            :label="item.type"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="handleAdd">提交</el-button>
    </el-form>
  </div>
</template>

<script>
  import ImgUpload from '../../components/imgUpload'
  import 'quill/dist/quill.snow.css'
  import { quillEditor, Quill } from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          header: '',
          title: '',
          content: '',
          contentText: '',
          author: '',
          catagory: ''
        },
        users: [],
        catagories: [],
        token: '',
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: 'https://upload-z1.qiniup.com',
              change: (xhr, formData) => {
                 formData.append('token', this.token)
              },
              response: (res) => {
                return res.url
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }

      }
    },
    components: {
      ImgUpload,
      quillEditor
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data
        })
      },
      getUser() {
        this.$axios.get('/user').then(res => {
          this.users = res.data
        })
      },
      getCatagory() {
        this.$axios.get('/catagory').then(res => {
          this.catagories = res.data
        })
      },
      handleContent({quill, html, text}) {
        this.form.content = html;
        let newtext = text.match(/[\s\S]*\n$/);
        this.form.contentText = newtext
      },
      handleAdd() {
        this.$axios.post('/news/add', this.form) .then(res => {
          if(res.code == 200) {
            this.$message.success('添加成功');

          }else {
            this.$message.warning(res.msg)
          }
        })
      }
    },
    created() {
      this.getToken()
      this.getUser()
      this.getCatagory()
    }
  }
</script>

<style scoped lang="scss">
  .add-user {
    background: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
  }

  /deep/ .ql-container{
    height: 200px;
  }
</style>
