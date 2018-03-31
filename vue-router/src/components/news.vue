<template>
  <div class="news">
    <h1>{{name}}</h1>
    <div class="child-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      name: 'news'
    }
  }
}
</script>

<style>

</style>
