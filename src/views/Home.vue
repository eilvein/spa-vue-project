<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p>API: {{ api }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    data() {
        return {
            api: process.env.VUE_APP_API
        }
    },
    components: {
        HelloWorld
    },
    mounted() {
        console.log('BASE_URL: ', process.env.BASE_URL)
        console.log('VUE_APP_API: ', process.env.VUE_APP_API)
    }
}
</script>
