<script>

import Header from './components/partials/Header.vue';

export default {
  name: 'App',

  components: {
    Header
  },

  data() {
    return {
      titolo: 'I miei Progetti',
    }
  },

  methods: {

  },

  mounted() {
  
  }
}
</script>

<template>
  
  <Header />

  <router-view />

</template>

<style lang="scss">

</style>
