<script setup>
const props = defineProps({
  pokemons: Array,
  text: String
});

const emit = defineEmits(['add-to-favorite']);
</script>

<template>
  <ul :class="$style.pokemons" v-if="pokemons.length > 0">
    <h3>Pockemon List: {{ pokemons.length }} displayed</h3>
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      <a :href="pokemon.url"
        ><label :for="pokemon.name"> {{ pokemon.name }}:</label></a
      >
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
    label{
      cursor:pointer;
    }
  }
}
</style>
