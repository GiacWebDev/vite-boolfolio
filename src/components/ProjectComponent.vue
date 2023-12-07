<script>

import { store } from '../data/store';

export default {
  name: 'ProjectComponent',
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
  <h1>I miei Progetti</h1>

  <ul>
    <li v-for="project in store.projects" :key="project.id">
        <strong><p>{{ project.name }}</p></strong>
        <p>{{ project.description }}</p>
        <strong><p>{{ project.technology }}</p></strong>
        <p>{{ project.image }}</p>
        <p>{{ project.type }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
