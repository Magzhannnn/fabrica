<script setup lang="ts">
import Container from "@/UI/Container.vue";
import { mainUrl, queryClientId } from "@/properties/properties";
import { IGallery } from "@/types/Photos";
import { ref } from "vue";

const galleryPhotos = ref<IGallery[]>([]);
const url = `${mainUrl}/random${queryClientId}&count=8`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    galleryPhotos.value = data;
  })
  .catch((err) => console.log(err));

// if (!username.value) {
//   fetch(`https://api.unsplash.com/me${queryClientId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// }
</script>

<template>
  <div class="my-[94px] text-center text-[72px] font-bold">Избранное</div>
  <Container>
    <div
      class="my-[106px] w-[99%] mx-auto flex flex-wrap items-center justify-center mobile:justify-around tablet:justify-start gap-6 overflow-auto hideScroll"
    >
      <img
        class="w-[90%] mobile:w-[40%] tablet:w-[32%] h-[300px] tablet:h-[400px] flex-row bg-gray-400 rounded-lg hover:cursor-pointer"
        :src="photo.urls.regular"
        :alt="photo.alt_description"
        v-for="photo in galleryPhotos"
        @click="$router.push({ name: 'photo', params: { id: photo.id } })"
      />
    </div>
  </Container>
</template>
