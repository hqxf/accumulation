<template>
  <div id="app">
    <loading></loading>
    <button @click="add">增加</button>
    <button @click="rec">减少</button>
    <p>现在的数据是：{{count}},他是一个{{getOdd}}</p>
    <button @click="isOdd">偶数点击有效</button>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions(['add','rec','isOdd']),
  computed:mapGetters(['count','getOdd'])
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
