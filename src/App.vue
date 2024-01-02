<script setup>
import Layout from './components/Layout.vue';

// https://pokeapi.co/api/v2/pokemon/ditto?limit=150
// https://jsonplaceholder.typicode.com/users

// const fetchPokemon = async () => {
//   try {
//     const fetchedData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
//     const response = await fetchedData.json();
//     if (response && response.results.length > 0) {
//       data.pokemonData = [...response.results];
//     } else {
//       data.pokemonData = [];
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// onBeforeMount(() => {
//   fetchPokemon();
// });
</script>

<template>
  <Layout />
</template>

<style module></style>
