<template>
  <div id="app">
    <h1>Hello App</h1>
    <p>
      <router-link to="/vue">Go to Home</router-link>
      <router-link to="/vue/demo1">Go to demo1</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
