<template>

    <section>

        <form>
            <div>
                <h2>用户登陆</h2>
                <p>用户昵称：<input id="txtName" type="text"></p>
                <p>登陆密码：<input id="txtPwd" type="password"></p>
                <p>
                    <input id="btnLogin" type="button" value="登陆">
                    <span id="checkMsg"><a href="register.html">还没账号？去注册</a></span>
                </p>
            </div>
        </form>

    </section>

</template>

<script>
    export default {
        name: "LoginComponent"
    }
</script>

<style scoped>

</style>