<template>
    <div id="news">
        <h3>我是新闻</h3>
        <input type="button" @click="add" value="添加">
        <input type="text" v-model='msg'>
        <ul>
            <li v-for="(val,i) in b" v-if='show'>{{val}}</li>
        </ul>
    </div>
</template>
<script>
    import Vue from "vue"
        Vue.filter("hq",function(a){

        })
    export default{
        name:"news",
        data(){
            return {list:[1,2,3,4,5,6],msg:'',show:true}
        },
        computed:{
            b(){
                return this.list.filter(function(v,i){
                    return v>2
                })
            }
        },
        methods:{
            add(){
                if(this.msg.replace(/^\s*|\s*$/g,'')==""){
                    this.msg="";
                    return ;
                }
                this.list.push(this.msg);
                this.msg="";
            }
        }
    }
</script>