<script setup>
const props = defineProps({
  favoritePockemons: Array,
  title: String
});
</script>

<template>
  <ul :class="$style.favoritePockemons" v-if="favoritePockemons.length > 0">
    <h3>{{ title }}</h3>
    <template v-for="pockemon in favoritePockemons" :key="pockemon.name">
      <li>{{ pockemon.name }}</li>
    </template>
  </ul>
</template>

<style module>
.favoritePockemons {
  padding-top: 10px;
}
</style>
