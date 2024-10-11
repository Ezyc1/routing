<script setup>
import { provide, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const HomeViews = ref(0);
provide('HomeViews', HomeViews);
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/my">Min sida</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
