<script setup>
import HomePage from '../pages/HomePage.vue';
import LogInPage from '../pages/LogInPage.vue';
import UsersPage from '@/pages/UsersPage.vue';
import BaseButton from './BaseButton.vue';
import { ref } from 'vue';


const page = ref('HomePage');

const components = {
  HomePage,
  LogInPage,
  UsersPage
};

const directToPage = (pageName) => {
  page.value = pageName;
};
</script>

<template>
  <main>
    <header>
      <BaseButton v-for="(_, key) in components" @clicked-button="directToPage(key)" :buttonText="key" />
    </header>
    <h1>{{ page }}</h1>
    <component :is="components[page]"/>
  </main>
</template>

<style></style>
