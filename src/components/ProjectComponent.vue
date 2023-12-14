<script>

import { store } from '../data/store';

export default {
  name: 'ProjectComponent',
  props: ['projects'],

  data() {
    return {
      store,
    }
  },

  components: {},
  methods: {},
  mounted() {
 
  },
  computed: {},
}

</script>



<template>

  <div>
    <div class="project-card" v-for="project in projects" :key="project.id">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <p>{{ project.technology }}</p>
      <!-- <p>{{ project.image }}</p> -->
      <p>{{ project.type.name }}</p>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>

.project-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  h3, p {
    color: black;
  }
}

</style>
