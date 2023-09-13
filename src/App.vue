<script setup lang="ts">
import NavbarPage from "@/components/NavbarPage.vue";
</script>

<template>
  <div id="start"></div>
  <NavbarPage />
  <!-- <router-link to="/">Main</router-link> |
  <router-link to="/favorite">Favorite</router-link> -->
  <router-view></router-view>
</template>

<style></style>
