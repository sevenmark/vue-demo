<template>
  <div class="detail">
    <h1>id = {{$route.params.id}}</h1>
    <h1>page = {{$route.params.page}}</h1>
  </div>
</template>

<script>
export default {
  name: 'detail',
  created () {
    // console.log(this.$route)
  }
}
</script>

<style>
h1{font-weight: normal;}
</style>
