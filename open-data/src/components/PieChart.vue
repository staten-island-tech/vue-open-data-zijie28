<script setup>
import { computed } from 'vue';

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
        
    }]
}))
</script>