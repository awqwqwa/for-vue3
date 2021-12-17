<template>
    <div id="lmessage">
        <input id="firat" type="text" v-model="message.name" placeholder="（请先输入姓名）">
        <div id="sameline">
            <textarea v-model="message.contain" placeholder="留言信息"></textarea>
            <div id="view2">
                <ul>
                    <li v-for="data in arr" :key="data">
                        <h5>{{data.name}}:</h5>
                        <pre>{{data.contain}}</pre>
                        <hr>
                    </li>
                </ul>
            </div>
        </div>
        <input type="button" value="留言" @click="sent">
    </div>

</template>

<script setup>
import {ref} from 'vue';
import {reactive} from 'vue';
            
    const message = ref({
        name: "",
        contain: ""
    });
    
    const arr = reactive([{}]);
    
    const sent = () => {
        if(message.value.name == "") {
            alert("请输入用户名")
        }else {
            arr.push(message.value);
        }
        axios.post("http://jsonplaceholder.typicode.com/posts", {
            title: message.value.name,
            body: message.value.contain,
            userId: 1
        })
        .then(res => {
            console.log(res);
        });
    }

</script>

<style>
#lmessage input[type=text] {
    width: 42%;
    padding: 12px 20px;
    margin: 8px 10px;
    display: inline-block;
    border: 3px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
}
#lmessage input[type=button]{
    display: block;
    margin: 10px;
    padding:12px;
    width: 20%;
    background-color: aquamarine;
    padding: 12px 20px;
    border-radius: 4px;
}
#lmessage textarea{
    width: 40%;
    height: 500px;
    resize: none;/*固定边框大小*/
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #ccc;
    overflow: auto;
    background: url("../assets/background/IMG_20211124_172308.jpg");
    background-repeat: no-repeat;
    background-position: right bottom;
}
#view2{
    width: 45%;
    border: 1px solid black;;
    background-color: rgb(147, 181, 228);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 500px;
    overflow: auto;
}
#sameline{
    display: flex;
}
</style>