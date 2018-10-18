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
          <img v-if="!header" :src="info.header" alt="">
          <img v-else :src="headerBase" alt="">
          <input style="display: none" type="file" @change="imgChange">
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
        <p v-if="!isRedact">{{info.joinPartyTime}}</p>
        <input v-else type="date" v-model="info.joinPartyTime">
      </div>
      <div class="info-item">
        <p>党费最后交纳时间</p>
        <p v-if="!isRedact">{{info.lastPayTime}}</p>
        <input v-else type="date" v-model="info.lastPayTime">
      </div>
      <div class="info-item">
        <p>当前身份</p>
        <p v-if="!isRedact">{{info.partyIdentity}}</p>
        <select v-else v-model="info.partyStatus" name="party" id="">
          <option value="2">党员</option>
          <option value="1">预备党员</option>
          <option value="0">积极分子</option>
        </select>
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
        isRedact: false,
        header: '',
        headerBase: ''
      }
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/user/userInfo.do').then(res =>{
          this.info = res.data;
          this.$store.commit('CHANGE_INFO', res.data)
        })
      },
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
          this.headerBase = e.target.result;
          let imgcode = e.target.result.replace('data:image/png;base64,', '');
          let formData = new FormData();
          formData.append("myFile", imgcode);
          this.$axios.post('/hhdj/image/uploadBase64.do', formData).then(res => {
            this.header = res.url
          })
        }
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
        if(this.header) {
          formDate.append('header', this.header);
        }
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
  select {
    border: none;
    outline: none;
  }
  select:focus {
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
