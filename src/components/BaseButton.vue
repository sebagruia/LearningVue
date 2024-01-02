<script setup>
import { computed } from 'vue';
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
    default: 'Save'
  },
  action: {
    type: Function,
    required: false
  }
});
const emit = defineEmits(['clicked-button']);

const computedEventFunction = computed(() => {
  if (props.action) {
    return props.action;
  }
  else{
    return ()=>emit('clicked-button');
  }
});

</script>

<template>
  <button @click="computedEventFunction">
    {{ buttonText }}
  </button>
</template>

<style module></style>
