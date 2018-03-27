<template>
  <div id="app">
    <my-button btn-type="default" btn-text="Default"></my-button>
    <my-button btn-type="primary" btn-text="Primary"></my-button>
    <my-button btn-type="success" btn-text="Success"></my-button>
    <my-button btn-type="info" btn-text="Info"></my-button>
    <my-button btn-type="waring" btn-text="Waring"></my-button>
    <my-button btn-type="danger" btn-text="Danger"></my-button>
    <my-button btn-type="danger" btn-text="Danger" btn-block="block" btn-size="lg"></my-button>
    <my-button btn-type="success" btn-text="Success" btn-size="sm"></my-button>
  </div>
</template>

<script>
import myButton from './components/button'

export default {
  name: 'app',
  components: {
    myButton
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
html{height: 100%;-webkit-overflow-scrolling:touch;}
body{
  
}
#app{
  height: 100%;
  overflow: auto;
}

</style>
