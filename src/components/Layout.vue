<script setup>
import { useRoute, useRouter } from 'vue-router';
import BaseButton from './BaseButton.vue';

const router = useRouter();
const route = useRoute();

const paths = [
  { name: 'HomePage', route: '/' },
  { name: 'Login', route: '/login' },
  { name: 'Users', route: '/users' }
];

const directToPage = (path) => {
  console.log('Fire');
  router.push(path);
};
</script>

<template>
  <main>
    <header>
      <BaseButton
        v-for="(path, index) in paths"
        @clicked-button="directToPage(path.route)"
        :buttonText="path.name"
        :key="index"
      />
    </header>
    <h1>{{ route.name }}</h1>
    <slot></slot>
  </main>
</template>

<style></style>
