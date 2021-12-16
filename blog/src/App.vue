<template>
    <img src="./assets/top.png" alt=""  style="padding: 0px;margin: 0px;width:100%;">
    <div id="pointer">
        <router-link to="/" @click="Show" >
            <h5 class="guiding" >首页</h5>
        </router-link>
        <router-link to="/message" @click="Hide" >
            <h5 class="guiding" >文章</h5>
        </router-link>
        <router-link to="/talking" @click="Hide">
            <h5 class="guiding" >留言</h5>
        </router-link>
        <router-link to="/about" @click="Hide">
            <h5 class="guiding" >关于我</h5>
        </router-link>
        <div id="search">
            <input type="text" v-model="searchName" placeholder="(本打算用于站内搜索，无后端服务器部署、)">
            <button  @click="Search"><a :href="searchHttp" target="_blank">搜索</a></button>
        </div>
    </div>
    <router-view>
    </router-view>
    <Music :bool="theBool">
    </Music>
</template>

<script setup>
import {ref} from 'vue';
import Music from './components/Music.vue';
    const theBool = ref(true);

    const searchName = ref(""); 

    const searchHttp = ref("");

    const Hide = () => {//使得音乐在切换时可以继续播放且显示播放器
        theBool.value = false;
    };

    const Show = () => {
        theBool.value = true;
    }
    
    const Search = () => {
        searchHttp.value = "https://www.baidu.com/s?wd=" + searchName.value;
        console.log(searchHttp.value);
    }
</script>

<style lang="css">
* {
  margin: 0; 
  padding: 0; 
  list-style-type: none; 
  text-decoration: none
}
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
.router-link-active h5{/*router-link自带类以实现点击 */
    background-color: rgb(28, 161, 161);
}
#search {
    float:right;
}
#search input[type=text]{
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    
}
#search button {
    padding: 10px;
    margin: 5px 10px;
    border-radius: 5px;
    
}
</style>