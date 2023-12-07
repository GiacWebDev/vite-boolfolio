<script>

import { store } from '../data/store';

export default {
  name: 'ProjectComponent',
  data() {
    return {
      projects: store.projects,
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
}

</script>

<template>
  <h1>I miei Progetti</h1>

  <ul>
    <li v-for="project in projects" :key="project.id">
        <strong><p>{{ project.name }}</p></strong>
        <p>{{ project.description }}</p>
        <strong><p>{{ project.technologies }}</p></strong>
        <p>{{ project.image }}</p>
        <p>{{ project.types }}</p>
      </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
