<script setup>
import User from '@/components/User.vue';
import { onBeforeMount, ref } from 'vue';

let users = ref([]);
const getUsers = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    if (data) {
      const usersData = await data.json();
      users.value = [...usersData];
    }
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  getUsers();
});
</script>

<template>
  <main>
    <h3>Users List</h3>
    <ul class="$style.usersList">
      <User v-for="user in users" :key="`user-${user.id}`" :user="user"/>
    </ul>
  </main>
</template>

<style module></style>
