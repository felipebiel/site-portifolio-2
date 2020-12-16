<template>
  <div id="app">
    <Header></Header>
    <main class="l-main">
      <Home></Home>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Home from '@/components/home/Home.vue';


export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style lang="scss">
</style>
