<template>
    <div id="lmessage">
        <form>
            <input id="firat" type="text" v-model="message.name" placeholder="（请先输入姓名）">
            <textarea v-model="message.contain" placeholder="留言信息"></textarea>
            <input type="button" value="留言" @click="sent">
        </form>
        <div id="view2">
            <ul>
                <li v-for="data in arr" :key="data.id">
                    <h5>{{data.name}}:</h5>
                    <pre>{{data.contain}}</pre>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:{name:"",contain:""},
            arr:[{}]
        }            
    },
    methods:{
        sent(){
            if(this.message.name==""){
                alert("请输入用户名")
            }else{
                this.arr.push(this.message);
            }
            var that=this;
            axios.post("http://jsonplaceholder.typicode.com/posts",{//http://jsonplaceholder.typicode.com/posts
            title:that.message.name,body:that.message.contain,userId:1
            })
            .then(
                function(a){
                    console.log(a);//测试用
                }
            )
        }
    }
}
</script>
<style>
#lmessage input[type=text] {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 10px;
    display: inline-block;
    border: 3px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
#lmessage input[type=button]{
    margin: 10px;
    padding:12px;
    width: 20%;
    background-color: aquamarine;
    padding: 12px 20px;
    border-radius: 4px;
}
#lmessage textarea{
    width: 95%;
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
    border: 1px solid black;;
    background-color: rgb(147, 181, 228);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 500px;
    overflow: auto;
}
</style>