<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: String,
  labelText: String,
});

const emit = defineEmits(['add-new-actor']);

const newPockemon = ref('');

const addNewPockemonObj = () => {
  const newPockemonObj = {
    name: newPockemon.value,
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  };
  emit('add-new-pockemon', newPockemonObj);
  newPockemon.value = '';
};
</script>

<template>
  <form @submit.prevent="addNewPockemonObj">
    <label for="addActor">{{ labelText }}</label>
    <input id="addActor" type="text" v-model="newPockemon" />
    <button type="submit">{{ text }}</button>
  </form>
</template>

<style module></style>