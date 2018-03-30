<template>
  <div id="app">
    <button type="button" @click="methodget">GET</button>
    <button type="button" @click="methodpost">POST</button>
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
    methodget: function () {
      this.$http.get('http://www.xxxxx.com/get.php?id=456').then(res => {
        console.log(res)
      })
    },
    methodpost: function () {
      var params = new URLSearchParams()
      params.append('id', '789')
      params.append('name', 'Jack')
      this.$http.post('http://www.xxxxx.com/post.php', params).then(res => {
        console.log(res)
      })
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
</style>
