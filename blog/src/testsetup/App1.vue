<template>
    <img src="../assets/top.png" alt=""  style="padding: 0px;margin: 0px;width:100%;">
    <div id="pointer">
        <router-link to="/" @click="show" >
            <h5 class="guiding" >首页</h5>
        </router-link>
        <router-link to="/message" @click="hide" >
            <h5 class="guiding" >文章</h5>
        </router-link>
        <router-link to="/talking" @click="hide">
            <h5 class="guiding" >留言</h5>
        </router-link>
        <router-link to="/about" @click="hide">
            <h5 class="guiding" >关于我</h5>
        </router-link>   
    </div>
    <router-view>
    </router-view>
    <!--使用component组件可以添加动态组件-->
    <component :is="Music"></component>
    <h1>{{num}}</h1>
    <Music bool="true"></Music>
</template>
<script setup>
import Music from '../components/Music.vue';
import Test from './Test.vue';
import {ref,getCurrentInstance} from 'vue';
//ref使得内部数据变为可响应的
//setup的执行时组件对象还没有创建，此时不能使用this来访问data/computed/methods/props我们可以通过 getCurrentInstance这个函数来返回当前组件的实例对象，也就是当前vue这个实例对象
const instance=getCurrentInstance();//可以在控制器查看
console.log(instance)
var num=ref(123456);//响应式写法
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
.router-link-active h5{/*router-link自带类以实现点击 */
    background-color: rgb(28, 161, 161);
}
</style>