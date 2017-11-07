<template>
  <div id="app">
  <mt-button type="default" @click.native="open()">加载数据</mt-button>
  <mt-radio title="123" :options="['12','23','45']" v-model="value"></mt-radio>
  <mt-cell title="asdfasf">{{value}}</mt-cell>
  <div class="page-swipe">
  <mt-swipe :auto="1000">
    
  <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
  <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
  <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
</mt-swipe>
  </div>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:"",
      value:""
    }
  },
  methods:{
    open(){
      Indicator.open("加载中...");
      setTimeout(()=>{
        Indicator.close();
      },2000)
    }

  }
}
</script>

<style>

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
</style>
