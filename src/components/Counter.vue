<script setup>
import BaseButton from './BaseButton.vue';
const props = defineProps({
  count: {
    type: Number
  },
  label: {
    type: String,
    default: 'CounterButton'
  },
  increment: {
    type: Function
  },
  decrement: {
    type: Function
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
