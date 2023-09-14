<script setup lang="ts">
import NavbarPage from "@/components/NavbarPage.vue";

const clientId = "57xo2P4_9QBm23AGRjnQoXOQOuf2Mj2R-a8hYmm_XB8";
const redirectUri = "https://fabrica-kohl.vercel.app/";
const scope = "read_user"; // Ваши разрешения

const authenticate = () => {
  const authUrl = `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
  window.location.href = authUrl;
};
authenticate();
</script>

<template>
  <div id="start"></div>
  <NavbarPage />
  <!-- <router-link to="/">Main</router-link> |
  <router-link to="/favorite">Favorite</router-link> -->
  <router-view></router-view>
</template>

<style></style>
