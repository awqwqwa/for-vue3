<template>
    <div id="music" v-show="bool">
        <div id:="secrchMusic" >
            <input type="text" v-model="name" placeholder="(点小鱼有惊喜)" @keyup.enter="search">
            <input type="button" value="搜索音乐" @click="search">
        </div>
        <ul >
            <li v-for="data in arr" :key="data.id">
                <div><img src="../assets/icon/e10.png" alt="" @click="play(data.id)"><b>{{data.name}}</b></div>
            </li>
        </ul>  
    </div>
    <audio ref='audio' :src="http" controls="controls" autoplay="autoplay" loop="loop" height="100" width="100"></audio>
</template>
<script setup>
import {ref, defineProps} from 'vue';

    const props = defineProps({
        bool: Boolean,//通过这种方式定义prop
    });

    const http = ref("");

    const arr = ref([]);

    const name = ref("");

    const search = () => {
        axios.get("https://autumnfish.cn/search?keywords=" + name.value)
        .then(
            res => {
                console.log(res);
                arr.value = res.data.result.songs;
            }
        );
    };
    
    const play = (id) => {
        console.log(id);
        http.value = "https://music.163.com/song/media/outer/url?id="+ id +".mp3";
        console.log(http.value);    
    }

</script>

<style lang="css">
*{margin: 0; padding: 0; list-style-type: none; text-decoration: none}
#music{
    margin: 10px;
    width: 500px;
    height: 1000px;
    display: inline-block ;
    border: 1px solid black;
    padding:25px;
    border-radius: 30px;
    background:url("../assets/background/IMG_20211124_172334.jpg");
}
#searchmusic{
    margin-left: 100px;
}
#music ul{
    padding-left: 75px;
}
#music ul li b{
    color:cyan;
}
#music ul li div img{
    width: 18px;
    height: 18px;
}
#music input[type=text]{
    width: 35%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 3px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
#music input[type=button]{
    margin: 10px;
    padding:12px;
    width: 15%;
    background-color: aquamarine;
    padding: 12px 10px;
    border-radius: 4px;
}
audio{
    position: fixed;
    right:10px;
    top: 90px;

}
</style>
