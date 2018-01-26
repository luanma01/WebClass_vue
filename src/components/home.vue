<template>
    <div class="main">
        <header-component :sessionId="sessionId"></header-component>
        <aside-component></aside-component>
        <router-view @recSession="sessionFunc"></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import HeaderComponent from './header'
    import AsideComponent from './aside'
    import FooterComponent from './footer'

    export default {
        components: {
            HeaderComponent,
            AsideComponent,
            FooterComponent
        },
        name: 'HomeComponent',
        sessionId: '',
        data: function () {
            return {
                sessionId: ''
            }
        },
        methods: {
            sessionFunc: function (id) {
                this.sessionId = id
                // console.log(id)
                // this.setData({sessionId: id})
                // console.log(this.sessionId)
            }
        }
    }
</script>

<style scoped>
</style>