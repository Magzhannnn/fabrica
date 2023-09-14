<script setup lang="ts">
import { defaultPhotoData } from "@/helpers";
import { clientId, mainUrl, queryClientId } from "@/properties/properties";
import { IGallery } from "@/types/Photos";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const onePhoto = ref<IGallery>(defaultPhotoData());

const url = `${mainUrl}/${route.params.id}${queryClientId}`;

fetch(url)
  .then((res) => res.json())
  .then((data: IGallery) => {
    onePhoto.value = data;
    console.log(onePhoto.value);
  })
  .catch((err) => console.log(err));

const likedPhotoHandle = () => {
  console.log(route.params.id);
  const urlForLike = `${mainUrl}/${route.params.id}/like${queryClientId}`;

  if (onePhoto.value.liked_by_user) {
    fetch(urlForLike, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        onePhoto.value.liked_by_user = false;
      })
      .catch((err) => console.log(err));
  } else {
    fetch(urlForLike, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        onePhoto.value.liked_by_user = true;
      })
      .catch((err) => console.log(err));
  }
};
</script>

<template>
  <img
    src="../assets/OnePhotoBg.png"
    class="relative tablet:w-full desktop:h-[600px] hidden mobile:block"
  />
  <div
    class="absolute w-[85%] h-[500px] top-[160px] mobile:top-[200px] left-1/2 -translate-x-1/2"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start gap-[10px]">
        <div>
          <img
            :src="onePhoto.user.profile_image.medium"
            :alt="onePhoto.user.name"
            class="rounded-full border border-black mobile:border-white"
          />
        </div>
        <div class="text-black mobile:text-white">
          <div class="text-lg mobile:text-[30px] font-normal">
            {{ onePhoto.user.name.toUpperCase() }}
          </div>
          <div
            class="text-[14px] text-gray-500 mobile:text-white mobile:text-lg font-normal"
          >
            {{
              onePhoto.user.instagram_username
                ? `@${onePhoto.user.instagram_username}`
                : "-"
            }}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 mobile:gap-5">
        <div class="hover:cursor-pointer">
          <svg
            @click="likedPhotoHandle"
            width="65"
            height="65"
            viewBox="0 0 58 58"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="z-[9]" filter="url(#filter0_d_11_271)">
              <rect
                x="4.93164"
                y="4.93164"
                width="49.0684"
                height="49.0684"
                rx="8"
                fill="white"
              />
            </g>
            <path
              d="M34.652 18.1184C31.9926 18.1184 29.7961 20.5886 28.9078 21.7544C28.0195 20.5886 25.823 18.1184 23.1636 18.1184C19.7208 18.1184 16.9199 21.2837 16.9199 25.1738C16.9199 27.2962 17.7624 29.2741 19.2369 30.6278C19.2584 30.6648 19.2847 30.699 19.3154 30.7297L28.5551 39.9503C28.6527 40.0474 28.78 40.0962 28.9078 40.0962C29.0356 40.0962 29.1634 40.0474 29.261 39.9499L38.808 30.4063L38.9065 30.3107C38.9846 30.237 39.0616 30.1624 39.1479 30.0668C39.184 30.0312 39.2138 29.9912 39.2367 29.9478C40.3074 28.6366 40.8957 26.9454 40.8957 25.1738C40.8957 21.2837 38.0948 18.1184 34.652 18.1184ZM38.4055 29.3858C38.3919 29.402 38.3792 29.419 38.368 29.4366C38.3211 29.4902 38.2699 29.5375 38.2192 29.5858L28.9073 38.8909L20.1354 30.1365C20.1072 30.0809 20.0676 30.0302 20.0194 29.9878C18.6842 28.8219 17.9189 27.0674 17.9189 25.1738C17.9189 21.8344 20.2715 19.1174 23.1636 19.1174C26.023 19.1174 28.4634 22.8471 28.4878 22.8846C28.6722 23.1695 29.1434 23.1695 29.3278 22.8846C29.3522 22.8471 31.7926 19.1174 34.652 19.1174C37.5441 19.1174 39.8967 21.8344 39.8967 25.1738C39.8967 26.7474 39.3669 28.2434 38.4055 29.3858Z"
              :fill="onePhoto.liked_by_user ? 'red' : 'black'"
            />

            <defs>
              <filter
                id="filter0_d_11_271"
                x="0.931641"
                y="0.931641"
                width="57.0684"
                height="57.0684"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_11_271"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_11_271"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          class="flex items-center justify-center gap-4 py-[18px] mobile:py-3 px-4 mobile:px-5 rounded-lg bg-[#FFF200] hover:bg-yellow-400 hover:cursor-pointer"
        >
          <svg
            width="26"
            height="23"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.381 10.7776C25.0395 10.7787 24.7629 11.055 24.7619 11.3966V19.209C24.759 20.2333 23.9291 21.0631 22.9048 21.0662H3.09524C2.07091 21.0631 1.241 20.2333 1.2381 19.209V11.3966C1.2381 11.0548 0.961071 10.7776 0.619048 10.7776C0.277024 10.7776 0 11.0548 0 11.3966V19.209C0.00077381 20.9182 1.38609 22.3035 3.09524 22.3043H22.9048C24.6139 22.3035 25.9992 20.9182 26 19.209V11.3966C25.999 11.055 25.7224 10.7787 25.381 10.7776Z"
              fill="black"
            />
            <path
              d="M8.46874 14.3124L12.4059 17.6862C12.4094 17.6862 12.4121 17.6891 12.4121 17.6924L12.4306 17.711C12.4368 17.7171 12.4492 17.7233 12.4554 17.7295C12.4614 17.7373 12.4703 17.7417 12.4802 17.7419C12.4864 17.7481 12.4987 17.7543 12.5049 17.7605C12.5111 17.7667 12.5235 17.7667 12.5297 17.7729C12.5359 17.779 12.5483 17.779 12.5606 17.7852C12.5668 17.7914 12.5792 17.7914 12.5854 17.7976C12.5978 17.8038 12.604 17.8038 12.6164 17.81C12.6225 17.81 12.6349 17.8162 12.6411 17.8162C12.6535 17.8162 12.6597 17.8224 12.6721 17.8224C12.6783 17.8224 12.6906 17.8286 12.6968 17.8286C12.7092 17.8286 12.7216 17.8348 12.734 17.8348H12.8949C12.9073 17.8348 12.9197 17.8286 12.9321 17.8286C12.9383 17.8286 12.9506 17.8224 12.9568 17.8224C12.9692 17.8224 12.9754 17.8162 12.9878 17.8162C12.994 17.8162 13.0064 17.81 13.0125 17.81C13.0249 17.8038 13.0311 17.8038 13.0435 17.7976C13.0497 17.7914 13.0621 17.7914 13.0683 17.7852C13.0806 17.779 13.0868 17.779 13.0992 17.7729C13.1054 17.7667 13.1178 17.7667 13.124 17.7605C13.1302 17.7543 13.1425 17.7481 13.1487 17.7419C13.1549 17.7357 13.1611 17.7357 13.1735 17.7295C13.1797 17.7233 13.1921 17.7171 13.1983 17.711L13.2168 17.6924C13.2203 17.6924 13.223 17.6895 13.223 17.6862L17.1602 14.3124C17.4202 14.0901 17.4505 13.6993 17.2283 13.4395C17.0062 13.1797 16.6154 13.1492 16.3554 13.3714L13.4335 15.8724V0.619048C13.4335 0.277024 13.1565 0 12.8145 0C12.4724 0 12.1954 0.277024 12.1954 0.619048V15.8724L9.2735 13.3714C9.0135 13.1492 8.62272 13.1797 8.40064 13.4395C8.17836 13.6993 8.20874 14.0901 8.46874 14.3124Z"
              fill="black"
            />
          </svg>
          <span class="text-[20px] hidden mobile:block">Downloand</span>
        </div>
      </div>
    </div>
    <img
      :src="onePhoto.urls.full"
      class="w-full object-cover mt-11 rounded-lg h-[227px] mobile:h-[700px]"
      :alt="onePhoto.alt_description"
    />
    <div class="pb-11"></div>
  </div>
</template>
