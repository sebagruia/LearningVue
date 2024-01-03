<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div :class="$style.user">
    <div :class="$style.name">
      <h4>Name:</h4>
      <p>{{ props.user.name }}</p>
    </div>
    <div :class="$style.userName">
      <h4>UserName:</h4>
      <p>{{ props.user.username }}</p>
    </div>
    <div :class="$style.email">
      <h4>Email:</h4>
      <p>{{ props.user.email }}</p>
    </div>
    <div :class="$style.phone">
      <h4>Phone:</h4>
      <p>{{ props.user.phone }}</p>
    </div>
    <div :class="$style.website">
      <h4>Web:</h4>
      <p>{{ props.user.website }}</p>
    </div>
  </div>
</template>

<style module>
.user {
  width: fit-content;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  .name,
  .userName,
  .email,
  .phone,
  .website {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;
  }
  p,
  h4 {
    margin: 0;
  }
}
</style>
