<template>
  <div id="app">
    <headerView :seller="seller"></headerView>
    <ul class="tab border-1px">
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
      seller: null
    }
  },
  components:{
    headerView:header
  },
  methods:{
    getHttp(){
      this.$http.get("../data.json").then(res=>{
        this.seller = res.data.seller;
      })
    }
  },
  mounted(){
    this.getHttp()
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
        &.active{
          color: rgb(240, 20 ,20);
        }
      }
    }
  }
</style>
