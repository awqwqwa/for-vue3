<template>
    <div class="home">
        <Textbook></Textbook>
        <GetWeather></GetWeather>
        <Joke></Joke>
    </div>
</template>
<script setup>
import Textbook from '../components/Textbook.vue';
import GetWeather from '../components/GetWeather.vue';
import Joke from '../components/Joke.vue';
import {ref,defineProps} from 'vue';
const props = defineProps({
    name:"",
    name1:String,//通过这种方式定义prop
});
const a=1;
const b=2;
let TheFunction = function(){
    //这样写函数
};
const emit = defineEmits([
    "tryevent"//此处定义事件名称  
]);
emit('tryevent',"这是事件被执行时发送的信息")
defineExpose({
    a,b//在这里设置导出数据
})
</script>
