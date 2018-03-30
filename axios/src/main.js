// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.use(VueAxios, Axios)

// 请求拦截
Axios.interceptors.request.use(function (config) {
  config.headers.token = 'ceshishuju'
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截
Axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response
  } else {
    console.log('error')
  }
}, function (error) {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
