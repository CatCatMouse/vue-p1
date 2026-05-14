<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <br>
    <RouterLink to="/login">Login</RouterLink>
    <br>
    <RouterLink to="/home/index">home-index</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
