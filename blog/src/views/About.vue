<template>
    <img :src="arr[index].src" alt="" @click="Doit">
    <div id="intro" >
        <h3>基本资料</h3>
        <p style="margin-top: 20px;">生物类型：xxx</p>
        <p>性别：xxx</p>
        <p>食性：xxx</p>
        <p>身高：xxx</p>
        <p>体重：xxx</p>
        <p>特征：无</p>
    </div>
</template>

<script setup>
//关于轮播图不显示的问题，src被当成静态处理，没有进行编译,通过require引入图片

import {ref} from 'vue';
    
    const index = ref(0);

    const arr = ref([
        {src:require("../assets/ys/56ab1b0f7bec54e77c912955ae389b504ec26a95.gif")},
        {src:require("../assets/ys/d458dfd88d1001e9730c2044af0e7bec55e797da.jpg")},
        {src:require("../assets/ys/eb167259ccbf6c816e8895a5ab3eb13532fa4052.jpg")},
        {src:require("../assets/ys/f2a146dce71190efa49d2f92d91b9d16fcfa60ab.jpg")}
    ]);

    const Doit = () => {
        if(index.value < 3){
            index.value++;
        }else{
            index.value = 0;
        };
        console.log(arr.value[index])
    }

</script>

<style>
#intro{
    position: absolute;
    display: block;
    margin: auto;
    height: 400px;
    width: 600px;
    border: 3px solid rgb(61, 162, 245);
    background-image:url(../assets/background/apic27286.jpg);
    background-repeat: no-repeat;
}
img{
    display: inline;
    width: 20%;
}
#intro h3{
    color: aqua;
    padding-top: 75px;
    padding-left: 250px;
}
#intro p{
    color: rgb(2, 15, 11);
    padding-left: 75px;
}
</style>
