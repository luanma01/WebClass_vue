<template>

    <section>
        <ul id="show-msg">
            <li>
                <p>
                    <span>xx同学：</span>
                    <span>年月日</span>
                </p>
                <h3>"hello world"</h3>
            </li>
        </ul>
        <div id="send">
            <span id="send-uname">游客</span>
            <input type="text" id="send-msg">
            <input type="button" id="send_btn" value="发 送">
        </div>
    </section>

</template>

<script>
    export default {
        name: 'ForumComponent'
    }
</script>

<style scoped>

</style>