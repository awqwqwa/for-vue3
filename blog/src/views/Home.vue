<template>
    <div class="home">
        <Textbook></Textbook>
        <GetWeather></GetWeather>
        <Joke></Joke>
    </div>
</template>

<script>
// @ is an alias to /src
import Textbook from '../components/Textbook.vue'
import GetWeather from '../components/GetWeather.vue'
import Joke from '../components/Joke.vue'

export default {
    components: {
        Textbook,
        GetWeather,
        Joke
    }
}
</script>
