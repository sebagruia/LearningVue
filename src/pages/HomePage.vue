<script setup>
import AddNewPockemon from '@/components/AddNewPockemon.vue';
import Counter from '@/components/Counter.vue';
import FavoriteActorsList from '@/components/FavoriteActorsList.vue';
import PockemonList from '@/components/PockemonList.vue';
import { computed, onBeforeMount, reactive } from 'vue';

const data = reactive({
  message: 'This is my Pockemon App',
  counterTitle: 'Counter Standard',
  count: 0,
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

const increment = () => {
  data.count++;
};
const decrement = () => {
  if (data.count > 0) {
    data.count--;
  }
};

const displayTitle = computed(() => {
  if (data.count > 20) {
    return 'Counter Max';
  } else if (data.count >= 0 && data.count <= 20) {
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
  <section>
    <div class="wrapper">
      <h1>{{ data.message }}</h1>
      <h2>{{ displayTitle }}</h2>
      <Counter
        label="CounterButton"
        :count="data.count"
        :increment="increment"
        :decrement="decrement"
      >
      </Counter>
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
    </div>
  </section>
</template>

<style module></style>
