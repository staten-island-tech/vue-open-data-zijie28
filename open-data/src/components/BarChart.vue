<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed } from 'vue'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
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


console.log(prop.data.value)
const data = computed(() => ({
  labels: prop.lables,
  datasets: [
    {
      label: 'Public Bathrooms',
      data: prop.data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
      ],
      borderWidth: 1
    }
  ]
}));


</script>


<template>
<div style="width:50%;">
<Bar id="chart" :options="options" :data="data"/>
</div>
</template>

<style scoped>
</style>