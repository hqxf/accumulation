<template>
  <div id="app">
    <button @click="add">增加</button>
    <div>
      现在数字：{{count}}---{{getOdd}}
    </div>
    <button @click="rec">减少</button>
    <button @click="oddClick" :disabled="gg">偶数才能点击</button>
    <button @click="clk">偶数点击</button>
    <button @click="asyncL">异步操作</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hq:0
    }
  },
  methods:mapActions([
    'add','rec','oddClick','clk','asyncL'
  ]),
  computed:mapGetters([
    'count','gg','getOdd'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
