<script setup>
import {ref,  reactive } from 'vue';

const props = defineProps({
  text: String,
  labelText: String
});
const emit = defineEmits(['add-new-actor']);

const data = reactive({
  newActor: ''
});

const addNewActorObj = () => {
  const newActorObj = {
    id: data.newActor,
    name: data.newActor,
    favorite: false,
    movies: 0
  };
  emit('add-new-actor', newActorObj);
  data.newActor = '';
};
</script>

<template>
  <!-- <form @submit.prevent="addNewActor"> -->
  <form @submit.prevent="addNewActorObj">
    <label for="addActor">{{ labelText }}</label>
    <input id="addActor" type="text" v-model="data.newActor" />
    <button type="submit">{{ text }}</button>
  </form>
</template>

<style module></style>
