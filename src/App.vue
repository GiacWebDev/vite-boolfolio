<script>

import axios from "axios";
import { store } from "./data/store";
import ProjectComponent from "./components/ProjectComponent.vue";

export default {
  name: 'App',

  components: {
    ProjectComponent
  },

  data() {
    return {

    }
  },

  methods: {
    getApi() {
      axios.get(store.apiUrl)
      .then(results => {
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

    <ProjectComponent />

  </div>
</template>

<style lang="scss">

</style>
