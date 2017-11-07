<template>
  <div class="header" v-if="seller">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports" @click="showDetail">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class='icon icon-keyboard_arrow_right'></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class='icon icon-keyboard_arrow_right'></i> 
    </div>
    <div class="bg">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import star from './../star/star.vue'
  export default{
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return {classMap:[],detailShow:false}
    },
    methods:{
      showDetail(){
        this.detailShow = true;
      }
    },
    mounted(){
      this.classMap = ['decrease','discount','special','invoice','guarantee']
    },
    components:{
      star
    }
  }
</script>
<style lang="less" scoped>
  .header{
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7,17,27,0.5);
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            background-image: url("./brand@2x.png");
            background-size: 30px 18px;
            @media (-webkit-min-device-piexl-ratio: 3),(min-device-piexl-ratio: 3){
              background-image: url('./brand@3x.png');
            }
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            vertical-align: top;
            &.decrease{
              background-image: url("decrease_1@2x.png")
            }
            &.discount{
              background-image: url('decrease_1@2x.png');
            }
            &.guarantee{
              background-image: url('guarantee_1@2x.png');
            }
            &.invoice{
              background-image: url('invoice_1@2x.png');
            }
            &.special{
              background-image: url('special_1@2x.png');
            }
          }
          .text{
            font-size: 12px;
            line-height: 10px;
            display: inline-block;
          }
        }
      }
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0,0,0,0.2);
        text-align: center;
        .count{
          font-size: 10px;
          vertical-align: top;
        }
        i.icon-keyboard_arrow_right{
          font-size: 10px;
          line-height: 24px;
          margin-left: 2px;
        }
      }
    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: rgba(7,17,27,0.2);
      .bulletin-title{
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        background-image: url('bulletin@2x.png');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text{
        vertical-align: top;
        font-size: 10px;
        margin: 0 4px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        right: 12px;
        top: 8px;
        font-size: 10px;
      }
    }
    .bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7,17,27,0.8);
      .detail-wrapper{
        min-height: 100%;
        .detail-main{
          margin-top: 64px;
          padding-bottom: 64px;
          .name{
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
          }
          .star-wrapper{
            margin-top: 18px;
            padding: 2px 0;
            text-align: center;
          }
        }
      }
      .detail-close{
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto;
        clear: both;
        font-size: 32px;
        .icon-close{
          
        }
      }
    }
  }
</style>