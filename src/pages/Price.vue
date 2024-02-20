<script setup lang="ts">
import { onMounted } from 'vue';
import CardProduct from "../components/v2/CardProduct.vue";

const paketan = [
  {
    speed: "100Mbps",
    price: "Rp.399.000",
    benefit: [
      "Diskon Biaya PSB 70%",
      "Kecepatan internet up to 100 Mbps",
      "Disney Plus Hotstar",
    ],
  },
  {
    speed: "200Mbps",
    price: "Rp.699.000",
    benefit: [
      "Diskon Biaya PSB 70%",
      "Kecepatan internet up to 200 Mbps",
      "Disney Plus Hotstar",
    ],
  },
  {
    speed: "250Mbps",
    price: "Rp.999.000",
    benefit: [
      "Diskon Biaya PSB 70%",
      "Kecepatan internet up to 250 Mbps",
      "Disney Plus Hotstar",
    ],
  },
];

onMounted(() => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Paket Internet Unggulan untuk Semua Kebutuhan Anda
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Temukan beragam pilihan paket internet berkualitas dengan harga yang
          terjangkau. Dari kecepatan tinggi hingga akses tak terbatas, kami
          hadirkan solusi internet yang dapat disesuaikan dengan kebutuhan
          digital Anda. Jelajahi opsi harga yang transparan dan nikmati koneksi
          internet yang dapat diandalkan untuk mendukung segala aktivitas online
          Anda.
        </p>
      </div>

      <!-- pricing internet start-->
      <CardProduct
        :paketan="paketan"
        heading="Pilih Paket Internet"
      />
      <!-- pricing internet end-->
    </div>
  </section>
</template>
