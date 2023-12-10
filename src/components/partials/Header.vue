<script>

export default {
  name: 'Header',
  data() {
    return {
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

  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/chi-siamo">Chi siamo</a>
        </li>
      </ul>
    </nav>
  </header>

</template>


<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 20px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        &:hover {
          text-decoration: underline;
        }
      }
    }
}
}
</style>
