<template>
    <div id="upload">
        <form v-if="submit">
            <label>标题：</label>
            <input type="text" v-model="title">
            <br>
            <label>内容：</label>
            <textarea v-model="message"></textarea>
            <br>
            <label>作者：</label>
            <input type="text" v-model="author" placeholder="(这个暂时没什么作用)">
            <input type="button" @click="sure" value="审阅">
        </form>
        <input type="button" @click="push" value="确认提交" v-if="!submit">
        <div id="view1" v-if="!submit">
            <h5 style="text-align: center;">{{title}}</h5>
            <pre>{{message}}</pre>
            <br>
            <h4 style="display: inline;">作者：{{author}}</h4>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';

    const title = ref("");

    const message = ref("");

    const author = ref("");

    const submit = ref(true);

    const sure = () => {
        submit.value = false;
    }

    const push = () => {
        axios.post("http://jsonplaceholder.typicode.com/posts",{
            title: title.value,
            body: message.value,
            userId:1
        })
        .then(
            res => {
                console.log(res);
            }
        )
        alert("感谢您的提交");
        title.value = "";
        message.value = "";
        author.value = "";
        submit.value = true;
    }

</script>

<style>
#upload input[type=text] {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 3px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
#upload input[type=button]{
    margin: 10px;
    padding:12px;
    width: 20%;
    background-color: aquamarine;
    padding: 12px 20px;
    border-radius: 4px;
}
#upload label{
    margin: 10px;
}
#upload textarea{
    width: 95%;
    height: 500px;
    resize: none;/*固定边框大小*/
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #ccc;
    overflow: auto;
    background: url("../assets/background/IMG_20211124_172245.jpg");
    background-repeat: no-repeat;
    background-position: right bottom;
}
#view1{
    width: 95%;
    height: 500px;
    resize: none;/*固定边框大小*/
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #ccc;
    overflow: auto;
    background: url("../assets/background/IMG_20211124_172245.jpg");
    background-repeat: no-repeat;
    background-position: right bottom;
}
</style>