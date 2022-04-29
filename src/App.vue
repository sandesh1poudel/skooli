<template>  

  <WebsiteView v-if="!isUserLogin" />
  <DashboardView v-else />

</template>

<script>

  import WebsiteView from './components/site-views/WebsiteView.vue';
  import DashboardView from './components/site-views/DashboardView.vue';

  export default {
    components: {
      WebsiteView,
      DashboardView
    },

    data () {
      return {
        isUserLogin : true,
      }
    }

  }
</script>