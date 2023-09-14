<script setup lang="ts">
import { IGallery } from "@/types/Photos";
import Container from "@/UI/Container.vue";
import { onMounted, onUnmounted, ref } from "vue";
import UpArrow from "./UpArrow.vue";
import { mainUrl, queryClientId } from "@/properties/properties";

const inputSerach = ref("");
const galleryPhotos = ref<IGallery[]>([]);

const url = `${mainUrl}/random${queryClientId}&count=8`;

console.log(url);

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    galleryPhotos.value = data;
    console.log(galleryPhotos.value);
  })
  .catch((err) => console.log(err));

const isLoading = ref(false);

async function fetchData(query: string) {
  isLoading.value = true;
  try {
    const response = await fetch(`${url}&query=${query}`);

    const data: IGallery[] = await response.json();
    console.log(data);

    galleryPhotos.value = [...galleryPhotos.value, ...data];
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  } finally {
    isLoading.value = false;
  }
}

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight && !isLoading.value) {
    fetchData(inputSerach.value);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  fetchData(inputSerach.value);
});

const searchHandler = async () => {
  if (!inputSerach.value.length) return;
  console.log("input search is not empty");

  galleryPhotos.value = [];
  await fetchData(inputSerach.value.toLowerCase());
};
</script>

<template>
  <div class="gallery__bg_photo"></div>
  <div
    class="absolute w-[60%] top-[200px] left-1/2 -translate-x-1/2 flex items-center"
  >
    <input
      type="text"
      id="default-search"
      class="block w-full py-5 pl-[34px] text-2xl text-black placeholder:text-black outline-none border border-black"
      placeholder="Поиск"
      v-model="inputSerach"
      required
    />
    <div
      @click="searchHandler"
      class="absolute hover:cursor-pointer right-[30px] inset-y-0 flex items-center pl-3"
    >
      <svg
        class="w-6 h-6 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
  </div>

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
    <div v-if="isLoading" class="text-center my-5">Загрузка...</div>
    <UpArrow />
  </Container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
