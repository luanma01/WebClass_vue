<template>

    <div id="aside-content">
        <ul>
            <li>
                <dl>
                    <dt><router-link class="link" to="/"><img id="avatarImg" src="../assets/img/avatar/talents.png" alt="loading..."></router-link></dt>
                    <dd id="avatarName">游客模式</dd>
                </dl>
            </li>
            <li><router-link class="link" id="personal" to="/login">个人中心</router-link></li>
            <li><router-link class="link" to="/forum">聊天室</router-link></li>
            <li><router-link class="link" id="personalRead" to="/book">阅读</router-link></li>
            <li><router-link class="link" id="personalVideo" to="/video">影音</router-link></li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'AsideComponent'
    }
</script>

<style scoped>

</style>