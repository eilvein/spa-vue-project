<template>
    <div class="box-404">
        <h1>404</h1>
        <ul>
            <li>
                <a @click="backHome">返回首页</a>
            </li>
            <li>
                <a>返回上一页({{ second }}s)</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
    data: function() {
        return {
            second: 5,
            timer: null
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            if (this.second === 0) this.backPrev()
            else this.second--
        }, 1000)
    },
    methods: {
        backHome() {
            this.$router.replace({
                name: 'Home'
            })
        },
        backPrev() {
            this.$router.go(-1)
        }
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>
<style lang="scss" scoped>
.box-404 {
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    background-color: #f7f8fa;
    height: 100%;
    height: 100vh;
    padding: 150px 30px;
    font-size: 16px;
    text-align: center;
    ul {
        width: 100%;
        padding: 20px 0;
        li {
            display: inline-block;
            margin: 0 20px;
        }
        a {
            color: #1aad19;
            cursor: pointer;
        }
    }
    h1 {
        color: #d0d1d3;
        font-size: 100px;
        font-weight: 600;
    }
}
</style>
