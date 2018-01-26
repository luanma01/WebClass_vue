<template>

    <div class="header">
        <div id="top">

            <router-link class="link" to="/"><img src="../assets/img/logo1c.png" alt="logo..."></router-link>

            <div id="top-search">
                <input type="search">
                <a class="link" href="javascript:;"><img src="../assets/img/search.png" alt="search"></a>
            </div>

            <div id="top-login">

                <ul id="loginList" class="list" v-if="!isLogin">
                    <li>
                        <router-link class="link" to="/register">注册</router-link>
                        <b>|</b>
                    </li>
                    <li>
                        <router-link class="link" to="/login">登录</router-link>
                    </li>
                </ul>

                <ul id="welcomeList" class="list" v-if="isLogin">
                    <li>
                        <a class="link" href="javascript:;">欢迎：<span id="uname"> {{uname}} </span></a>
                        <b>|</b>
                    </li>
                    <li>
                        <a id="logout" @click="doLogout" href="javascript:;">注销</a>
                    </li>
                </ul>

            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: ['sessionId'],
        data () {
            return {
                isLogin: false,
                userId: ''
            }
        },
        mounted () {
            console.log('header')
            this.doIsLogin()
            // console.log(this.userId)
        },
        methods: {
            doIsLogin: function () {
                this.$http.get('http://127.0.0.1/program/WebClass_vue/src/assets/data/routes/isLogin.php')
                    .then(res => {
                    console.log(res)
                    // to do check error, not exists SESSION
                })
            },
            // checkLogin: () => {
            //     // this.setData({userId: this.props.sessionId})
            //     console.log(this.props)
            // }
        }

    }
</script>

<style scoped>

</style>