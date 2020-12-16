<template>
  <div id="app">
    <Header></Header>
    <main class="l-main">
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Skills from '@/components/skills/Skills.vue';


export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Skills
  }
}
</script>

<style lang="scss">
</style>
