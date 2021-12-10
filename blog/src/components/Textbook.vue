<template>
    <div id="textbook">
        <div>
            <input type="text" v-model="message" @keyup.enter="add">
            <input type="button" value="添加" @click="add">
        </div>
        <div>
            <input type="text" v-model="num" @keyup.enter="del">
            <input type="button" value="删除" @click="del">
        </div>
        <div id="showlist">
            <ul>
                <li v-for="(item,i) in arr" :key="item.id">
                    <p style="display: inline;">{{i}}.{{item}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

    const message = ref("这里可以输入你的备忘录");

    const num = ref(0);

    const arr = ref([""]);

    const add = () => { 
            arr.value.push(message);
    };

    const del = () => {
            arr.value.splice(num,1);
    }

</script>

<style>
#textbook{
    height: 580px;
    width: 500px;
    background: aqua;
    background: url("../assets/background/IMG_20211124_172217.jpg");
    padding-left: 10px;
}
#textbook div{
    padding: 5px;
}
#textbook input[type=text]{
    width: 50%;
    padding: 12px 20px;
    margin: 0px 10px;
    border: 3px solid aqua;
    border-radius: 10px;
    box-sizing: border-box;
    color:chartreuse;
}
#textbook input[type=button]{
    margin: 10px;
    padding:12px;
    width: 20%;
    background-color: aquamarine;
    padding: 12px 20px;
    border-radius: 4px;
}
#showlist {
    border: 1px solid black;
    height: 390px;
    width: 400px;
    border-radius: 10px;
    overflow: auto;/*解决溢出问题*/
}
#showlist p{
    background-color: rgba(9, 9, 231, 0.1);
    border: 1px solid black;
    padding:0px 10px;
    border-radius: 10px;
}
#showlist ul li{
    padding: 2px 0px;
}
/*
<script >
export default {
    data(){
        return{
            message:"这里可以输入你的备忘录",
            num:0,
            arr:[""],
        }  
    },
    methods:{
        add(){ 
            this.arr.push(this.message);
        },
        del(){
            this.arr.splice(this.num,1);
        },
    }
}
</script>
*/
</style>
