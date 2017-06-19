<template>
  <div class="hq">
    {{msg}}
    <Hello></Hello>
  </div>
</template>
<script>
  import Hello from './Hello'
  export default {
    data () {
      return {msg: 'sdfasfasfasf'}
    },
    components: {
      Hello
    }
  }
</script>
<style>
</style>