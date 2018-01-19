<template>

    <section>
        <form>
            <div>
                <h2>新用户注册</h2>
                <p>用户昵称：<input id="txtName" type="text"></p>
                <p>新的密码：<input id="txtPwd" type="password"></p>
                <p>确认密码：<input id="rePwd"  type="password"></p>
                <p>
                    <input id="btnReg" type="button" value="注册">
                    <span id="checkMsg"><a href="login.html">已有账号？去登陆</a></span>
                </p>
            </div>
        </form>
    </section>

</template>

<script>
    export default {
        name: "RegisterComponent"
    }
</script>

<style scoped>

</style>