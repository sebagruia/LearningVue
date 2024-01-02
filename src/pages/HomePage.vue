<script setup>
import { reactive , computed, onBeforeMount} from 'vue';
import Counter from '@/components/Counter.vue';
import AddNewActor from '@/components/AddNewActor.vue';
import MovieActorsList from '@/components/MovieActorsList.vue';
import FavoriteActorsList from '@/components/FavoriteActorsList.vue';

const data = reactive({
  message: 'This is my movie',
  counterTitle: 'Counter Standard',
  count: 0,
  pokemonData: [],
  details: {
    title: 'Matrix',
    length: '3h',
    actors: [
      {
        id: 1,
        name: 'Keanu Reeves',
        favorite: false,
        movies: 2
      },
      {
        id: 2,
        name: 'Carrie-Anne Moss',
        favorite: false,
        movies: 5
      },
      {
        id: 3,
        name: 'Laurence Fishburne',
        favorite: false,
        movies: 1
      },
      {
        id: 4,
        name: 'Hugo Weaving',
        favorite: false,
        movies: 9
      }
    ]
  }
});

const fetchPokemon = async () => {
  try {
    const fetchedData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const response = await fetchedData.json();
    if (response && response.results.length > 0) {
      data.pokemonData = [...response.results];
    } else {
      data.pokemonData = [];
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

const addNewActor = (actorObjectPayload) => {
  console.log(actorObjectPayload);
  data.details.actors.push(actorObjectPayload);
};
const addFavorite = (pockemonPayload) => {
  console.log(pockemonPayload);
  data.details.actors.push(pockemonPayload);
};

</script>

<template>
  <section>
    <div class="wrapper">
      <h1>{{ data.message }}</h1>
      <p>{{ data.details.title }}</p>
      <p>{{ data.details.actors.length }}</p>
      <h2>{{ displayTitle }}</h2>
      <Counter
        label="CounterButton"
        :count="data.count"
        :increment="increment"
        :decrement="decrement"
      >
      </Counter>
      <MovieActorsList @add-to-favorite="" :pokemons="data.pokemonData" text="Pokemon Characters" />
      <FavoriteActorsList :actors="data.details.actors" title="Favorite actors" />
      <AddNewActor
        text="AddNewActor"
        labelText="Add a new Actor"
        @add-new-actor="addNewActor"
      />
    </div>
  </section>
</template>

<style module></style>
