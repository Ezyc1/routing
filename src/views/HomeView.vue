<script setup>
import { inject, onMounted, ref } from 'vue';
const views = inject('HomeViews')
onMounted(() => {
  views.value++
})
const tid = ref(new Date().toLocaleString())
</script>

<template>
  <main>
    <p>
      När sidan laddades var klockan...<br>
      {{ tid }}
    </p>

    <p>Denna sidan har visats:
      <b>{{ views }}</b> gånger
    </p>
  </main>
</template>
