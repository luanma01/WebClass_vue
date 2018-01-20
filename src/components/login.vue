<template>

    <section>

        <form>
            <div>
                <h2>用户登陆</h2>
                <p>用户昵称：<input id="txtName" type="text" v-model.trim="uname"></p>
                <p>登陆密码：<input id="txtPwd" type="password" v-model.trim="password"></p>
                <p>
                    <input id="btnLogin" type="button" value="登陆" @click="loginfunc">
                    <span id="checkMsg"><router-link to="/register">{{checkMsg}}</router-link></span>
                </p>
                <output> {{this.uname}} </output>
            </div>
        </form>

    </section>

</template>

<script>

    export default {
        name: 'LoginComponent',
        data: function () {
            return {
                uname: '',
                password: '',
                checkMsg: '还没账号？去注册'
            }
        },
        methods: {
            loginfunc: function () {
                this.$http.get('http://127.0.0.1/program/WebClass_vue/src/assets/data/routes/login.php?uname=' +
                    this.uname + '&password=' + this.password).then(res => {
                    if(res.body.code !== 1)
                        this.checkMsg = '用户名或密码错误!'
                    else{
                        this.checkMsg = '还没账号？去注册'
                        this.$router.push('/')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>