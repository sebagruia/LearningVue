<script setup>
const props = defineProps({
  pokemons: Array,
  text: String
});

const emit = defineEmits(['add-to-favorite']);
</script>

<template>
  <ul :class="$style.pokemons" v-if="pokemons.length > 0">
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      <label :for="pokemon.name"> {{ pokemon.name }}:</label>
      <button @click="emit('add-to-favorite', pokemon)">Favorite</button>
    </li>
  </ul>
</template>

<style module>
.pokemons {
  li {
    width: 320px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
  }
}
</style>
