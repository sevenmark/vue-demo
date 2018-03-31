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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{margin: 0 10px;}
</style>
