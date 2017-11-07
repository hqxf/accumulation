<template>
  <div id="app">
    <el-button @click='get'>普通按钮</el-button>
    <div>
      {{msg}}
    </div>
    <el-button type="primary">普通按钮</el-button>
    <el-radio>123</el-radio>
    <Butto @click.native="ad"></Butto>
  </div>
</template>
<script>
  import Butto from "./components/Button.vue"
  import axios from "axios"
  export default{
    name:"app",
    methods:{
      get(){
        axios.get("a.txt").then(function(res){
          this.msg = res.data;
        }.bind(this)).catch(function(erro){
          console.log(erro);
        })
      },
      ad(){
        alert(1)
      }
    },
    components:{
      Butto
    },
    data(){
      return {msg:"默认数据"}
    }
  }
</script>