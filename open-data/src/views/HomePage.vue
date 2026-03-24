<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import BarChart from '../components/BarChart.vue';
import { Bar } from 'vue-chartjs';
const api = "https://data.cityofnewyork.us/resource/i7jb-7jku.json"
let labels = ref([]);
let data = ref([]);
let nlables = [];
let ndata = [];
onMounted(async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const count = counter(result);
    count.forEach((value, key) => {
      nlables.push(key);
      ndata.push(value);
    })
    labels.value = nlables;
    data.value = ndata;
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