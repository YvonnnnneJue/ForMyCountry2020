<template>
<div> 
  <h1>404</h1>
  <ul>
    <li @click="go('1')">1-hello world</li>
  </ul>
</div>
</template>

<script>

export default {
  name: '1_hello xct',
  components: {
  },
  methods: {
    go(i) {
      this.$router.push({name: i, params: { username: 'eduardo' }});
    }
  }
}
</script>
