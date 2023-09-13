<script setup lang="ts">
import Container from "@/UI/Container.vue";
</script>

<template>
  <div class="w-full py-[25px] bg-black">
    <Container>
      <div class="flex items-center justify-between">
        <router-link to="/"
          ><img src="../assets/OBJECTS.png" alt="fabrica"
        /></router-link>

        <router-link to="/favorite"
          ><img src="../assets/favorites.png" alt="favorites"
        /></router-link>
      </div>
    </Container>
  </div>
</template>
