<script setup lang="ts">
import { RouterLink } from "vue-router";

const informasi = [
  { name: "Tentang kami", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Syarat dan Ketentuan", url: "/terms" },
  { name: "Kebijakan Privasi", url: "/privacy" },
];
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100">
    <div class="mx-auto md:w-[82%] md:flex md:justify-between">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Informasi
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li v-for="{ name, url } in informasi" class="mb-4">
              <RouterLink :to="url" class="hover:underline">{{
                name
              }}</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Help center
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Instagram</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center px-4 py-6 bg-gray-100 dark:bg-gray-700">
      <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <a href="#">Hariyanto Saputra</a>.
        All Rights
        Reserved.
      </span>
    </div>
  </footer>
</template>
