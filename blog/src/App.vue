<template>
    <img src="./assets/top.png" alt=""  style="padding: 0px;margin: 0px;width:100%;">
    <div id="pointer">
        <router-link to="/" @click="show">
            <h5 class="guiding">首页</h5>
        </router-link>
        <router-link to="/message" @click="hide">
            <h5 class="guiding">文章</h5>
        </router-link>
        <router-link to="/talking" @click="hide">
            <h5 class="guiding">留言</h5>
        </router-link>
        <router-link to="/about" @click="hide">
            <h5 class="guiding">关于我</h5>
        </router-link>   
    </div>
    <router-view>
    </router-view>
    <Music :bool="thebool">
    </Music>
</template>
<script>
import Music from './components/Music.vue'
export default {
    name: 'Home',
    data(){
        return{
        thebool:true
        }
    },
    components: {
        Music,
    },
    methods:{
        hide(){//使得音乐在切换时可以继续播放且显示播放器
            this.thebool=false;
        },
        show(){
            this.thebool=true;
        }
    }
}
</script>
<style lang="css">
#pointer{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 0px;
  margin: 0;
  overflow: hidden;
  background-color: rgb(90, 151, 204);
}
.guiding{
  float:left;
  display: block;
  padding:20px 40px;
  color:rgb(243, 243, 243);
}
.guiding:hover {
  background-color: rgb(15, 100, 134);
}
</style>
