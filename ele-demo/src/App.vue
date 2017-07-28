<template>
  <div id="app">
    <headerView></headerView>
    <ul class="tab">
      <router-link to="/goods" tag="li" active-class="active">商品</router-link>
      <router-link to="/ratings" tag="li" active-class="active">评论</router-link>
      <router-link to="/seller" tag="li" active-class="active">商家</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    headerView:header
  }
}
</script>

<style lang="less">
  #app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      li{
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        &.active{
          color: rgb(240, 20 ,20);
        }
      }
    }
  }
</style>
