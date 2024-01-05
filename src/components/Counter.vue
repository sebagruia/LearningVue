<script setup>
import BaseButton from './BaseButton.vue';
import { count } from '@/composables/useCount';

const props = defineProps({
  label: {
    type: String,
    default: 'CounterButton'
  },
  button_1: {
    type: Boolean,
    default: true
  },
  button_2: {
    type: Boolean,
    default: true
  }
});

const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<template>
  <div :class="$style.counter">
    <label
      >{{ label }} <span>{{ count }}</span></label
    >
    <BaseButton buttonText="Increment" :action="increment"/>
    <BaseButton buttonText="Decrement" :action="decrement"/>
  </div>
</template>

<style module>
.counter {
  button {
    padding: 5px;
    margin-left: 10px;
  }
}
</style>
