<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const api = "https://data.cityofnewyork.us/resource/i7jb-7jku.json"
onMounted(async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

)
</script>

<template>
  <HelloWorld />
</template>
