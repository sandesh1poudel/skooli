<template>
  <Navigation />
    <router-view></router-view>
  <Footer />
</template>

<script>
    import Navigation from '../Navigation.vue';
    import Footer from '../Footer.vue';

    export default {
        components : {
            Navigation,
            Footer,
        }

    }
</script>

<style>

</style>