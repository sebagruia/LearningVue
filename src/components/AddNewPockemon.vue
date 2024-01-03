<script setup>
import { reactive } from 'vue';

const props = defineProps({
  text: String,
  labelText: String
});
const emit = defineEmits(['add-new-actor']);

const data = reactive({
  newPockemon: ''
});

const addNewPockemonObj = () => {
  const newPockemonObj = {
    name: data.newPockemon,
    url: 'https://pokeapi.co/api/v2/pokemon/ditto'
  };
  emit('add-new-pockemon', newPockemonObj);
  data.newPockemon = '';
};
</script>

<template>
  <form @submit.prevent="addNewPockemonObj">
    <label for="addActor">{{ labelText }}</label>
    <input id="addActor" type="text" v-model="data.newPockemon" />
    <button type="submit">{{ text }}</button>
  </form>
</template>

<style module></style>
