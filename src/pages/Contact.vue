<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Hubungi Kami
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Anda mengalami masalah teknis? Mau mengirim feedback tentang sesuatu?
        Butuh detail tentang rencana bisnis kami? Mari cari tahu.
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-200 focus:border-primary-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-200 dark:focus:border-primary-200 dark:shadow-sm-light"
            placeholder="nama@gmail.com" required />
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-200 focus:border-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-200 dark:focus:border-primary-200 dark:shadow-sm-light"
            placeholder="Biarkan kami tahu apa yang bisa kami bantu" required />
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Pesan</label>
          <textarea id="message" rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-200 focus:border-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-200 dark:focus:border-primary-200"
            placeholder="Isi Pesan..."></textarea>
        </div>
        <button type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-100 sm:w-fit hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Kirim Pesan
        </button>
      </form>
      <div class="pt-10">
        <h2 class="text-xl font-semibold">Informasi Lainnya</h2>
        <p class="text-sm text-gray-500">
          informasi lainnya yang mungkin membantu
        </p>
        <div class="py-2">
          <div class="flex pb-4 items-center gap-4">
            <svg class="h-9 w-9" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19" />
            </svg>
            <p class="text-sm">
              Jl. Ir. H. Juanda no.38, Kec. Indramayu, Kabupaten.Indramayu, Jawa Barat 45218, Indonesia
            </p>
          </div>
          <div class="flex pb-4 items-center gap-4">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1zm15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6z" />
            </svg>
            <p class="text-sm">+62 878 2888 8379</p>
          </div>
          <div class="flex pb-4 items-center gap-4">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
            </svg>
            <p class="text-sm">sahaznet@gmail.com</p>
          </div>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=jl ir h juanda no 38 kec indramayu amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameborder="5" loading="lazy" class="w-full py-4 h-64"></iframe>
      </div>
    </div>
  </section>
</template>
