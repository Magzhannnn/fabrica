<script setup lang="ts">
import { mainUrl, queryClientId } from "@/properties/properties";
import { ref } from "vue";

const username = ref(localStorage.getItem("username"));

if (!username.value) {
  fetch(`https://api.unsplash.com/me${queryClientId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
</script>

<template></template>
