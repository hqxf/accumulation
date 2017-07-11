<template>
  <div id="app">
    <mt-button type="default" @click="info">default</mt-button>
    <mt-button type="primary" @click.native="msg">primary</mt-button>
    <mt-button type="danger" @click="open">danger</mt-button>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue"
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.use(Toast);
Vue.use(InfiniteScroll);
export default {
  name: 'app',
  data () {
    return {
      msg1: 'Welcome to Your Vue.js App',
      list:[1,2,3,4]
    }
  },
  methods:{
    info(){
      Toast({
        message: '伞下你的笑',
        position: 'bottom',
        duration: 5000
      });
    },
    msg(){
      Indicator.open('加载中...');
      setTimeout(()=>{
        Indicator.close();
      },2000)
    },loadMore() {
  this.loading = true;
  var that =this;
  setTimeout(() => {
    console.log(that.list);
    let last = that.list[that.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      that.list.push(last + i);
    }
    that.loading = false;
  }, 2500);
},open(){
  MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
});
  }
}
}
</script>

<style>

</style>
