<template>
    <div id="joke">
        <input type="button" value="get a joke" @click="get">
        <h4>{{joke}}</h4>
    </div>
</template>

<script setup>
import {ref} from 'vue';
    const joke=ref("点击上面看笑话哦");


    const get = () =>{
                axios.get("https://autumnfish.cn/api/joke")
                .then(function(a){
                    joke.value=a.data;
                    //this.joke=a.data;这里无法直接赋值，要改变this指向
                }
                )
    }


</script>
<style>
#joke{
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
    width: 220px;
    height: 300px;
    position: fixed;
    right: 10px;
    bottom: 60px;
}
#joke h4{
    color: rgba(9, 9, 231, 0.3);
    overflow: auto;
    
}
</style>