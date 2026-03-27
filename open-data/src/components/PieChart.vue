<script setup>
import { computed } from 'vue';
import { Pie } from 'vue-chartjs';
const prop = defineProps({
  data: {
    type: Array, 
    required: true
  },
  lables: {
    type: Array,
    required: true
  }
  })
const config = {
  type: 'doughnut',
  data: data,
};

const data = computed(() => ({
    lables: prop.lables,
    datasets: [{
        lables: prop.lables,
        data: prop.data,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      hoverOffset: 4
    }]
}))
</script>

<template>
  <Pie :data="data"></Pie>
</template>