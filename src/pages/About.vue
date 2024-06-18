<script setup lang="ts">
import { onMounted } from "vue";
import Contact from "./Contact.vue";

onMounted(() => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
</script>

<template>
  <!-- Hero section start -->
  <div class="py-20 px-4 mx-auto md:w-[82%] lg:py-16">
    <h2 class="text-4xl leading-relaxed font-extrabold dark:text-white">
      Mengenai
      <mark class="p-2 text-white bg-primary-100 rounded dark:bg-primary-100">SahazNetwork</mark>
    </h2>
    <p class="my-4 text-lg text-gray-500 dark:text-gray-400">
      SahazNetwork adalah perusahaan penyedia layanan internet terkemuka. Dengan
      pengalaman dan keahlian yang telah teruji, kami berkomitmen untuk
      memberikan solusi internet terbaik kepada pelanggan kami.
    </p>
    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
      Sebagai penyedia layanan internet, kami memperluas jangkauan layanan
      internet kami untuk memenuhi kebutuhan digital yang terus berkembang.
      Dengan dukungan teknologi terkini dan tim profesional yang berdedikasi,
      kami hadir untuk memberikan pengalaman internet yang handal dan memuaskan.
    </p>
    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
      Kami berusaha terus berinovasi untuk memberikan layanan terbaik kepada
      pelanggan kami. Keberlanjutan pelayanan yang andal, keamanan data, dan
      kepuasan pelanggan adalah fokus utama kami. Terima kasih atas kepercayaan
      Anda kepada SahazNetwork sebagai mitra terpercaya dalam menghadapi
      tantangan digital bersama.
    </p>
  </div>
  <!-- Hero section end -->

  <!-- Feat list start -->
  <div class="flex justify-center items-center flex-col">
    <section class="bg-white dark:bg-gray-900 md:w-[82%]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white lg:w-6 lg:h-6" height="16" width="18"
                viewBox="0 0 576 512">
                <path
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Visi</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Menjadi penyedia layanan internet terkemuka yang diakui secara
              global untuk kehandalan dan kepercayaan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white lg:w-6 lg:h-6" height="16" width="16"
                viewBox="0 0 512 512">
                <path
                  d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Misi</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Mendukung kemajuan bisnis melalui solusi internet inovatif,
              memberikan pengalaman pelanggan yang superior, dan berfokus pada
              pertumbuhan teknologi.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900 md:w-[82%]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Mengapa Berkolaborasi Dengan SahazNetwork
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            SahazNetwork bermitra dengan perusahaan teknologi terpercaya dan
            dapat diandalkan, menjamin kualitas produk dan layanan yang kami
            hadirkan kepada para klien. Dengan komitmen terhadap kehandalan,
            keamanan, dan inovasi, kami memastikan bahwa setiap pelanggan
            mendapatkan solusi internet yang memenuhi standar kelas dunia.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- Feat list end -->

  <!-- Contact us start -->
  <Contact />
  <!-- Contact us end -->
</template>
