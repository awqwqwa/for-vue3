<template>
    <div id="weather">
        <input type="text" v-model="city" @keyup.enter="getWeather(city)">
        <input type="button" value="查询天气" @click="getWeather(city)">
        <ul>
            <li v-for="item in arr" :key="item.id">
                <h2>{{item.date}}</h2>
                <p>{{item.fengli}}</p>
                <p>{{item.low}}</p>
                <p>{{item.high}}</p>
                <p>{{item.type}}</p>
                <p>{{item.fengxiang}}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {ref, getCurrentInstance} from 'vue';

    const city = ref("北京");

    const arr = ref([]);

    let getWeather = (city) => {
        axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
        .then(
            res => {
                arr.value = res.data.data.forecast;
                console.log(arr.value);//控制台查看
            }
        );
    }

</script>

<style>
#weather ul{
    display: flex;/*使ili子元素成为弹性项目*/
    justify-content: space-around;
    flex-direction: row;
    justify-content: center;
    background-color: aqua;
    margin-top:2px;
    border-radius: 10px;
}
#weather ul li{
    background-color: white;
    margin: 20px 10px;
    border-radius: 30px;
    padding:10px;
}
#weather {
    padding-left: 10px;
}
</style>