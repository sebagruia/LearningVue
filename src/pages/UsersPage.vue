<script setup>
import Layout from '@/components/Layout.vue';
import User from '@/components/User.vue';
import { onBeforeMount } from 'vue';
import { userList } from '../composables/useUserList';

const getUsers = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    if (data) {
      const usersData = await data.json();
      userList.value = [...usersData];
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
  <Layout>
    <section>
      <h3>Users List</h3>
      <ul class="$style.usersList">
        <User v-for="user in userList" :key="`user-${user.id}`" :user="user" />
      </ul>
    </section>
  </Layout>
</template>

<style module></style>
