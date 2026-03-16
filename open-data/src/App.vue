<script setup>
import { onMounted, ref } from 'vue';
import BarChart from './components/BarChart.vue'
import { Bar } from 'vue-chartjs';
const api = "https://data.cityofnewyork.us/resource/i7jb-7jku.json"
let labels = ref([]);
let data = ref([]);
onMounted(async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const count = counter(result);
    console.log(count)
    count.forEach((value, key) => {
      console.log(value)
      console.log(key)
      labels.value.push(key);
      data.value.push(value);
    })

  } catch (error) {
    console.error(error.message);
  }
  
  
}
)

function counter(data) {
    const counts = new Map();
    for (const item of data) {
        counts.set(item['location_type'], (counts.get(item['location_type']) || 0) + 1);
    }
    return counts;
}


</script>

<template>
<BarChart :data="data" :lables="labels"></BarChart>
</template>
