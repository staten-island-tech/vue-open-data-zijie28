<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const prop = defineProps({
  data: {
    type: Object, 
    required: true
  },
  lables: {
    type: Object,
    required: true
  }
  })

const lable = prop.lables;
const data = {
  lables: lable,
  datasets: [{
    lable: 'Public Bathrooms',
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
  }]
}
const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
</script>


<template>
<Bar id="chart" :options="options" :data="data"/>
</template>
