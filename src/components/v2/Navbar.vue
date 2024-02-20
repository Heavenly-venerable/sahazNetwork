<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core";

defineEmits(["switch"]);

const links = [
  { name: "Home", url: "/" },
  { name: "Tentang Kami", url: "/about" },
  { name: "Harga", url: "/price" },
  { name: "Hubungi Kami", url: "/contact" },
];
const isOpen = ref(false);
const isDark = useDark();
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4"
    >
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Sahaz<span
            class="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-primary-200"
            >Network</span
          >
        </span>
      </RouterLink>
      <button
        type="button"
        @click="$emit('switch')"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <div v-if="isDark == false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-gray-500"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
            />
          </svg>
        </div>
        <div v-if="isDark == true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-gray-400"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
            />
          </svg>
        </div>
        <span class="sr-only">Icon description</span>
      </button>

      <button
        @click="isOpen = !isOpen"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto"
        :class="{ hidden: !isOpen }"
        id="navbar-default"
      >
        <div
          class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <RouterLink
            :to="url"
            class="px-4 py-2 text-slate-900 hover:underline hover:bg-primary-100 hover:text-white hover:rounded-lg dark:text-white"
            v-for="{ name, url } in links"
          >
            {{ name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
