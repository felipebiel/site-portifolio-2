<template>
  <div id="app">
    <Header></Header>
    <main class="l-main">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Skills from '@/components/skills/Skills.vue';
import Work from '@/components/work/Work.vue';


export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Skills,
    Work
  }
}
</script>

<style lang="scss">
</style>
