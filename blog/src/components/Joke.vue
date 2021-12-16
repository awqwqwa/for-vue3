<template>
    <div id="joke">
        <input type="button" @click="get">
        <h4>{{joke}}</h4>
    </div>
</template>

<script setup>
import {ref} from 'vue';

    const joke = ref("点击上面看笑话哦");

    const get = () => {
        axios.get("https://autumnfish.cn/api/joke")
        .then(
            res => {
                joke.value = res.data;
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
#joke input[type=button]{
    width: 10px;
    background-color: aquamarine;
    padding: 12px 20px;
    border-radius: 40px;
}
</style>