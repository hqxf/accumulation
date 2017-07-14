<template>
  <div class="box" @click="change">
    {{msg}}
  </div>
</template>
<script>
  export default{
    data(){
      return {msg:"伞下你的笑 ^_^"}
    },
    methods:{
      change(){
        this.msg = this.msg.split("").reverse().join("");
      }
    }
  }
</script>
<style lang="less" scoped>
  html{
    height: 100%;
    body{
      height: 100%;
      .box{
        color: red;
      }
    }
  }
</style>