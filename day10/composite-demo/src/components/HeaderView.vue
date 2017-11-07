<template>
  <div class="header">
    <ul class="clearfix">
      <li :class="{active:isAct1}" @click="changeAct(1)"><a href=""></a>首页</li>
      <li :class="{active:isAct2}" @click="changeAct(2)"><a href=""></a>关注</li>
      <li :class="{active:isAct3}" @click="changeAct(3)"><a href=""></a>我的</li>
    </ul>
      <div class="content">
        <div class="content-item clearfix" v-for="(item,index) in list">
          <div class="left">{{item.id}}</div>
          <div class="right">{{item.content}} <span>{{item.time | formats}}</span></div>
        </div>
      </div>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  export default{
    data(){
      return {isAct1:true,isAct2:false,isAct3:false,list:[]}
    },
    methods:{
      changeAct(a){
        this.hander(a);
        this.http(a);
      },
      hander(a){
        var prev,next;
        var b = a;
        var c = a;
        prev = b==1?3:--b;
        next = c==3?1:++c;
        this['isAct'+prev] = false;
        this['isAct'+next] = false;
        this['isAct'+a] = true;
      },
      http(a){
        var that = this;
        this.$http.get('../src/data/header.data').then(function(res){
          that.list = res.data[a-1];
        })
      }
    },
    mounted(){
      this.http(1);
    }
  }
</script>
<style lang='less'>
  li{
    list-style: none;
    float: left;
    height: 30px;
    line-height: 30px;
    width: 33.33%;
    text-align: center;
    cursor: pointer;
  }
  .active{
    border-bottom: 3px solid #abcdef;
    background: orange;
    color: white;
  }
  .clearfix:after{
    content:"";
    display: block;
    visibility: hidden;
    height: 0;
    font-size: 0;
    clear: both;
  }
  .left{
    float: left;
    width: 50px;
    height: 40px;
    background: #abcdef;
    text-align: center;
  }
  .right{
    height: 40px;
    background: pink;
    margin-left: 52px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .right span{
    float: right;
  }
  .content-item{
    line-height: 40px;
  }
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 66px, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    transform: translate3d(0, 66px, 0);
  }
</style>