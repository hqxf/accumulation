<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger" icon="close">主要按钮</el-button>
    <el-button type="info" icon="search">主要按钮</el-button>
    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>
    <el-row>
    <el-col :span="16">1212</el-col>
    <el-col :span="8">3</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
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
