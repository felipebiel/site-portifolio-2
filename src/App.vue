<template>
  <div id="app">
    <Header></Header>
    <main class="l-main">
      <Home></Home>
      <About></About>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';


export default {
  name: 'App',
  components: {
    Header,
    Home,
    About
  }
}
</script>

<style lang="scss">
</style>
