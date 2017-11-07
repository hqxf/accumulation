<template>
  <div id="app">
    <HeaderView></HeaderView>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderView
  },
  methods:mapActions(['add','rec','isOdd','sync']),
  computed:mapGetters(['count','isShow','getOdd','isAct','isDefa'])
}
</script>

<style lang='less'>
  *{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  } 
</style>
