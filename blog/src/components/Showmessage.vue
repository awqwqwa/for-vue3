<template>
    <div id="showmessage">
        <div v-for="data in arr" :key="data.id">
            <h5>{{data.title}}</h5>
            <pre>{{data.body}}</pre>
        </div>
        <input type="button" value="click me to show" @click="show" v-if="bool">
    </div>
</template>

<script setup>
import {ref} from 'vue';

    const arr = ref([]);

    const bool = ref(true);

    const show = () => {
        bool.value = false;
        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(
            res => {
                console.log(res);
                arr.value = res.data;
            }
        )
    }
    
</script>

<style>
#showmessage div{
    border: 1px solid black;;
    background-color: rgb(216, 215, 215);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 180px;
    overflow: auto;
}
#showmessage input[type=button]{
    margin: 10px;
    padding:12px;
    width: 20%;
    background-color:rgb(37, 186, 255);
    padding: 12px 20px;
    border-radius: 4px;
}
#showmessage div h5{
    text-align: center;
}
</style>