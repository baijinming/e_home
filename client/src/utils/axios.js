import axios from 'axios'
import store from '../store/store'

const env = process.env.NODE_ENV;
const baseURL = env == 'development' ? '/api' : '';

const instance = axios.create({
  baseURL,
  timeout:10000,
})

const xhr = {
  get(url, data, config = {}) {
    let mytoken = store.state.token;
    if(mytoken) {
      let headers = {
        'token' : mytoken
      };
      config.headers = {...config.headers, ...headers}
    }
    return new Promise((resolve,reject) => {
      instance.get(url, {params: data, ...config}).then(res=>{
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config = {}, method = 'post') {
    let mytoken = store.state.token;
    if(mytoken) {
      let headers = {
        'token' : mytoken
      };
      config.headers = {...config.headers, ...headers}
    }
    return new Promise((resolve,reject) => {
      instance[method](url, data, config).then(res=>{
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, data, config) {
    return this.post(url,data,config,'put')
  },
  delete(url, data, config) {
    return this.post(url, data, config, 'delete')
  }
}

export default xhr;


