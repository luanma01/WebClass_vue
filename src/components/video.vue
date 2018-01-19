<template>

    <section>
        <ul id="rt_nav">
            <li><h3>我的影音</h3></li>
            <li>
                <a href="javascript:;">电影</a>
                <ul id="movieList">
                    <li><a href="javascript:;">演示动画01</a></li>
                    <li><a href="javascript:;">演示动画02</a></li>
                    <li><a href="javascript:;">口水三国·李儒篇</a></li>
                    <li><a href="javascript:;">口水三国·赵云篇</a></li>
                </ul>
            </li>
            <li>
                <a href="javascript:;">小视频</a>
                <ul id="videoList">
                    <li>暂无</li>
                </ul>
            </li>
        </ul>

        <div>
            <video id="video" controls="" preload="none" poster="video/posterM0.png" muted>
                <source id="mp4" src="video/videoM0.mp4" type="video/mp4">
                <!-- 					<source id="webm" src="images/trailer.webm" type="video/webm"> -->
                <!-- 					<source id="ogv" src="images/trailer.ogv" type="video/ogg"> -->
                <!-- 					<p>Your user agent does not support the HTML5 Video element.</p> -->
            </video>
        </div>
    </section>

</template>

<script>
    export default {
        name: "VideoComponent"
    }
</script>

<style scoped>

</style>