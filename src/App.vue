<script>

import axios from "axios";
import { store } from "./data/store";

export default {
  name: 'App',
  data() {
    return {
      titolo: 'Eccoci su Vue'
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ titolo }}</h1>
  </div>
</template>

<style lang="scss">

</style>
