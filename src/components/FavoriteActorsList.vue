<script setup>
const props = defineProps({
  actors: Array,
  title: String
});

const generateFavoriteActors = () => {
  return props.actors.filter((item) => item.favorite === true);
};
</script>

<template>
  <ul :class="$style.favoriteActors" v-show="generateFavoriteActors().length > 0">
    <h3>{{ title }}</h3>
    <template v-for="actor in actors" :key="actor.id">
      <li v-if="actor.favorite">{{ actor.name }}</li>
    </template>
  </ul>
</template>

<style module>
.favoriteActors {
  padding-top: 10px;
}
</style>
