<template>
    <div id="showmessage">
        <div v-for="data in arr" :key="data.id">
            <h5>{{data.title}}</h5>
            <pre>{{data.body}}</pre>
        </div>
        <input type="button" value="click me to show" @click="show" v-if="bool">
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            bool:true,
        }
    },
    methods:{
        show(){
            var that=this;
            this.bool=false;
            axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(
                function(a){
                    console.log(a);
                    that.arr=a.data;
                }
            )
        },

    }
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