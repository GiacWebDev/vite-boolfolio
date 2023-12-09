<script>

import axios from "axios";
import { store } from "./data/store";
import ProjectComponent from "./components/ProjectComponent.vue";
import Loader from './components/partials/Loader.vue';

export default {
  name: 'App',

  components: {
    ProjectComponent,
    Loader
  },

  data() {
    return {
      titolo: 'I miei Progetti',
      isLoaded: false
    }
  },

  methods: {
    getApi() {
      axios.get(store.apiUrl)
      .then(results => {
          this.isLoaded = true
          console.log(results.data);
          store.projects = results.data;
      })
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div class="container">

    <Loader v-if="!isLoaded"/>
    <ProjectComponent v-else/>

  </div>
</template>

<style lang="scss">

</style>
