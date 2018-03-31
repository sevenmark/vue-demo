# vue-router

``` bash
# App.vue
<template>
  <div id="app">
    <router-link to="/">index</router-link>
    <router-link to="/news/child">news/child</router-link>
    <router-link :to="{ name: 'News' }">news</router-link>
    <router-link to="/detail/789/page/2">/detail/789/page/2</router-link>
    <router-link :to="{ name: 'detail', params: { id: 147, page: 1}}">detail/id/147/page/1</router-link>
    <router-link :to="{ path: '/detail', query: { id: 147, page: 1}}">detail?id=147&page=1</router-link>
    <button type="button" @click="news">click</button>
    <button type="button" @click="forward">forward</button>
    <button type="button" @click="back">back</button>
    <router-view/>
    <router-view name="more" class="more"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      lists: [],
      body: ''
    }
  },
  methods: {
    news: function () {
      // this.$router.push({path: '/news'})
      this.$router.push({name: 'detail', params: {id: 999, page: 7}})
      // this.$router.push({path: '/news', query: {id: 999}})
    },
    forward: function () {
      this.$router.go(1)
    },
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
```

``` bash
# router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/news'
import Detail from '@/components/detail'
import Child from '@/components/child'
import More from '@/components/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (resolve) => require(['@/components/index.vue'], resolve)  //懒加载
    },
    {
      path: '/news',
      name: 'News',
      components: {
        default: News,
        more: More
      },
      children: [
        {
          path: 'child',
          name: 'child',
          component: Child
        }
      ]
    },
    {
      path: '/detail/:id/page/:page',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
