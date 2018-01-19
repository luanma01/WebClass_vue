<template>
    <div class="main">
        <header-component></header-component>
        <aside-component></aside-component>
        <router-view></router-view>
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
        name: 'HomeComponent'
    }
</script>

<style scoped>
</style>