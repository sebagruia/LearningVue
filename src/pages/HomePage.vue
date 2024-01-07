<script setup>
import AddNewPockemon from '@/components/AddNewPockemon.vue';
import Counter from '@/components/Counter.vue';
import FavoriteActorsList from '@/components/FavoriteActorsList.vue';
import Layout from '@/components/Layout.vue';
import PockemonList from '@/components/PockemonList.vue';
import { computed, onBeforeMount, reactive } from 'vue';
import { count } from '../composables/useCount';
import UsersPage from './UsersPage.vue';

const data = reactive({
  message: 'This is my Pockemon App',
  counterTitle: 'Counter Standard',
  pokemonData: [],
  favoritePockemons: []
});

const fetchPokemon = async () => {
  try {
    const fetchedData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const response = await fetchedData.json();
    if (response && response.results.length > 0) {
      data.pokemonData = [...response.results];
    }
  } catch (error) {
    console.log(error);
  }
};
onBeforeMount(() => {
  fetchPokemon();
});

const displayTitle = computed(() => {
  if (count.value > 20) {
    return 'Counter Max';
  } else if (count.value >= 0 && count.value <= 20) {
    return 'Counter Standard';
  }
});

const addNewPockemon = (pockemonObjectPayload) => {
  data.pokemonData.push(pockemonObjectPayload);
};
const addFavorite = (pockemonPayload) => {
  data.favoritePockemons.push(pockemonPayload);
};
</script>

<template>
  <Layout>
    <section>
      <div class="wrapper">
        <h1>{{ data.message }}</h1>
        <h2>{{ displayTitle }}</h2>
        <h2>Count From Composable: {{ count }}</h2>

        <Counter label="CounterButton"> </Counter>
        <PockemonList
          @add-to-favorite="addFavorite"
          :pokemons="data.pokemonData"
          text="Pokemon Characters"
        />
        <FavoriteActorsList
          :favoritePockemons="data.favoritePockemons"
          title="Favorite actors"
        />
        <AddNewPockemon
          text="AddPockemon"
          labelText="Add a new Pockemon"
          @add-new-pockemon="addNewPockemon"
        />
        <UsersPage />
      </div>
    </section>
  </Layout>
</template>

<style module></style>
