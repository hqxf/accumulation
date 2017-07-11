<template>
  <div class="loading-box" @click="turn">
    <div class="loader">
  <div class="loader-inner pacman">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>  
  </div>
</template>
<script>
  export default{
    data(){
      return {msg:"Loading...^_^"}
    },
    methods:{
      turn(){
        var str = this.msg;
        this.msg = str.split("").reverse().join("");
      }
    }
  }
</script>
<style scoped>
  @-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7; }
 
  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }
 
@keyframes pacman-balls {
  75% {
    opacity: 0.7; }
 
  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }
 
.pacman {
  position: relative; }
.pacman > div:nth-child(2) {
-webkit-animation: pacman-balls 1s 0s infinite linear;
        animation: pacman-balls 1s 0s infinite linear; }
.pacman > div:nth-child(3) {
-webkit-animation: pacman-balls 1s 0.25s infinite linear;
        animation: pacman-balls 1s 0.25s infinite linear; }
.pacman > div:nth-child(4) {
-webkit-animation: pacman-balls 1s 0.5s infinite linear;
        animation: pacman-balls 1s 0.5s infinite linear; }
.pacman > div:nth-child(5) {
-webkit-animation: pacman-balls 1s 0.75s infinite linear;
        animation: pacman-balls 1s 0.75s infinite linear; }
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #fff;
  border-left: 25px solid #fff;
  border-bottom: 25px solid #fff;
  border-radius: 25px; 
}
.pacman > div:nth-child(2), .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5) {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 10px;
  height: 10px;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
      -ms-transform: translate(0, -6.25px);
          transform: translate(0, -6.25px);
  top: 25px;
  left: 100px; 
}  
.loading-box{
  background: #000;
}
</style>