<script>
import ProjectComponent from '../components/ProjectComponent.vue';
import Loader from '../components/partials/Loader.vue';

export default {
  name: 'About',
  data() {
    return {
    }
  },
  components: {
    ProjectComponent,
    Loader
    },

  methods: {},
  mounted() {
 
  },
  computed: {},
}

</script>


<template>
  <div class="main-wrapper">
    <div class="container">
      <Loader v-if="!isLoaded"/>
      <ProjectComponent v-else/>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
