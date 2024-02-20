<script setup lang="ts">
defineProps(["paketan", "heading"]);
</script>

<template>
  <div class="py-16 dark:bg-gray-900">
    <div class="flex justify-center items-center mt-8 mb-8 lg:mb-16">
      <h3
        class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        {{ heading }}
      </h3>
    </div>
    <div
      class="flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center my-6 mx-6"
    >
      <div
        data-aos="fade-right"
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        v-for="{ speed, price, benefit } in paketan"
      >
        <div>
          <p class="text-base text-slate-900 dark:text-white">Speed</p>
        </div>
        <div class="my-2">
          <h1 class="text-3xl text-slate-900 font-bold dark:text-white">{{ speed }}</h1>
        </div>
        <div class="my-2">
          <h1 class="text-xl font-bold text-slate-900 dark:text-white">
            {{ price }}<span class="text-slate-400 font-normal">/bulan</span>
          </h1>
        </div>
        <div>
          <p class="text-base text-slate-900 my-1 dark:text-white">Benefit</p>
        </div>

        <div class="mb-2">
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li
              class="text-slate-900  flex items-center space-x-3 dark:text-white"
              v-for="item in benefit"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 mr-4 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex justify-center items-center mx-auto mt-4 mb-2">
          <button
            class="py-2 px-6 text-white rounded-lg bg-primary-100 hover:bg-primary-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-300"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
