<script setup></script>

<template>
  <form :class="$style.loginContainer">
    <div :class="$style.nameInput">
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="Your name here" />
    </div>
    <div :class="$style.passwordInput">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Your password here" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style module>
.loginContainer{
    .nameInput, .passwordInput{
        width:250px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }
}

</style>
