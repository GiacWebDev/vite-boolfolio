<script>

import axios from "axios";
import { store } from "../data/store";
import ProjectComponent from "../components/ProjectComponent.vue";
import Loader from '../components/partials/Loader.vue';
import Header from '../components/partials/Header.vue';

export default {
  name: 'progetti',

  components: {
    ProjectComponent,
    Loader,
    Header
  },

  data() {
    return {
      titolo: 'I miei Progetti',
      isLoaded: false,
      localProjects: [] 
    }
  },

  methods: {
    getApi() {
      axios.get(store.apiUrl)
        .then(results => {
          this.isLoaded = true;
          console.log(results.data);
          this.localProjects = results.data; 
          console.log(this.localProjects)
        })
        .catch(error => {
          console.error('Errore', error);
        });
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>



<template>


  <div class="main-wrapper">
    <div class="container">
      <Loader v-if="!isLoaded" />
      <ProjectComponent v-else :projects="localProjects" />
    </div>
  </div>

</template>



<style lang="scss">

</style>
