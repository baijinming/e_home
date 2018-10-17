<template>
  <div>
    <div class="header">
      <div class="fixed">
        <div class="return" v-on:click="$router.go(-1)"></div>
        个人信息
        <div v-if="!isRedact" class="redact" @click="() => this.isRedact = true">编辑</div>
        <div v-else class="redact" @click="updateInfo">保存</div>
      </div>
    </div>

    <div class="info">
      <div class="info-item">
        <p>头像</p>
        <img v-if="!isRedact" :src="info.header" alt="">
        <label v-else>
          <img :src="info.header" alt="">
          <input id="img" style="display: none" type="file" @change="imgUpload">
        </label>
      </div>
      <div class="info-item">
        <p>姓名</p>
        <p v-if="!isRedact">{{info.username}}</p>
        <input v-else type="text" v-model="info.username">
      </div>
      <div class="info-item">
        <p>身份证</p>
        <p>{{info.idCard}}</p>
      </div>
      <div class="info-item">
        <p>家庭住址</p>
        <p v-if="!isRedact">{{info.hometown}}</p>
        <input v-else type="text" v-model="info.hometown">
      </div>
      <div class="info-item">
        <p>工作地址</p>
        <p v-if="!isRedact">{{info.address}}</p>
        <input v-else type="text" v-model="info.address">
      </div>
      <div class="info-item">
        <p>民族</p>
        <p v-if="!isRedact">{{info.nation}}</p>
        <input v-else type="text" v-model="info.nation">
      </div>
      <div class="info-item">
        <p>微信号</p>
        <p v-if="!isRedact">{{info.wxNum}}</p>
        <input v-else type="text" v-model="info.wxNum">
      </div>
      <div class="info-item">
        <p>QQ号</p>
        <p v-if="!isRedact">{{info.qqNum}}</p>
        <input v-else type="text" v-model="info.qqNum">
      </div>
      <div class="info-item">
        <p>性别</p>
        <p v-if="!isRedact" v-text="info.sex == 1 ? '男' : '女'"></p>
        <div v-else>
          <input type="radio" :checked="info.sex == 1" name="sex" @click="() => this.info.sex = 1">男
          <input type="radio" :checked="info.sex != 1" name="sex" @click="() => this.info.sex = 0">女
        </div>
      </div>
      <div class="info-item">
        <p>最高学历</p>
        <p v-if="!isRedact">{{info.education}}</p>
        <input v-else type="text" v-model="info.education">
      </div>
      <div class="info-item">
        <p>职称</p>
        <p v-if="!isRedact">{{info.jobRank}}</p>
        <input v-else type="text" v-model="info.jobRank">
      </div>
      <div class="info-item">
        <p>薪资水平</p>
        <p v-if="!isRedact">{{info.salary}}</p>
        <input v-else type="text" v-model="info.salary">
      </div>
      <div class="info-item">
        <p>入党时间</p>
        <p>{{info.joinPartyTime}}</p>
      </div>
      <div class="info-item">
        <p>党费最后交纳时间</p>
        <p>{{info.lastPayTime}}</p>
      </div>
      <div class="info-item">
        <p>当前身份</p>
        <p>{{info.partyIdentity}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        info: {},
        isRedact: false
      }
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/user/userInfo.do').then(res =>{
          this.info = res.data;
        })
      },
      imgUpload(event) {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          let token = res.data.data;
          let form = new FormData();
          form.append("file",event.target.files[0]);
          form.append('token', token);
          axios.post("https://upload-z1.qiniup.com", form, {header:{"Conent-type":"multipart/form-data"}}).then(res => {
            this.info.header = res.data.url
            console.log(res)
          })
        });
      },
      updateInfo() {
        let formDate = new FormData();
        formDate.append('username', this.info.username);
        formDate.append('hometown', this.info.hometown);
        formDate.append('address', this.info.address);
        formDate.append('nation', this.info.nation);
        formDate.append('wxNum', this.info.wxNum);
        formDate.append('qqNum', this.info.qqNum);
        formDate.append('sex', this.info.sex);
        formDate.append('education', this.info.education);
        formDate.append('jobRank', this.info.jobRank);
        formDate.append('salary', this.info.salary);
        formDate.append('joinPartyTime', this.info.joinPartyTime);
        formDate.append('lastPayTime', this.info.lastPayTime);
        formDate.append('partyStatus', this.info.partyStatus);
        this.$axios.post('/hhdj/user/modifyInfo.do', formDate).then(res => {
          if(res.code == 1) {
            this.getData();
            this.isRedact = false
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: relative;
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: #c50206;
  }
  .return {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(45deg);
  }
  .redact {
    position: absolute;
    right: 15px;
    top: 0;
  }

  input {
    outline: none;
    border: 1px solid transparent;
    display: inline-block;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
  input:focus {
    outline: none;
  }

  .info-item {
    height: 50px;
    width: 7.5rem;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;
      margin: 10px 0;
      border-radius: 50%;
    }
  }
</style>
