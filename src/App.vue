<script setup lang="ts">
import NavbarPage from "@/components/NavbarPage.vue";
import { clientId } from "./properties/properties";

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
