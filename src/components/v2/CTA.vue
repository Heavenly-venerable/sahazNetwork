<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps(["cta"]);
</script>

<template>
  <section class="bg-white dark:bg-gray-900 py-16">
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl md:w-[82%] sm:py-16 lg:px-6"
      v-for="{ heading, desc } in cta"
    >
      <div class="max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ heading }}
        </h2>
        <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {{ desc }}
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <RouterLink
            to="/price"
            class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-100 rounded-lg hover:bg-primary-200 focus:ring-4 focus:ring-blue-300"
          >
            Lihat Selengkapnya
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
