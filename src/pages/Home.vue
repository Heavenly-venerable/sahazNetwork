<script setup lang="ts">
import { onMounted } from "vue";
import HeroSection from "../components/v2/HeroSection.vue";
import CardProduct from "../components/v2/CardProduct.vue";
import FeatureList from "../components/v2/FeatureList.vue";
import Card from "../components/v2/Card.vue";
import CTA from "../components/v2/CTA.vue";
import StaticNumber from "../components/v2/StaticNumber.vue";

const heading = "Pilih Paket Menarik!";
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

const cta = [
  {
    heading: "SahazNetwork Internet",
    desc: "Hadir dengan bandwidth hingga 250 Mbps dan kuota unlimited. Sehingga kamu dapat melakukan kegiatan digital 24/7 tanpa perlu khawatir",
  },
  {
    heading: "SahazNetwork Gamers",
    desc: "SahazNetwork Gamers memiliki bandwidth hingga 250 Mbps. Dapatkan pengalaman terbaik saat bermain game untuk terus jadi juara!",
  },
  {
    heading: "SahazNetwork Combo IPTV",
    desc: "Hadir dengan kualitas resolusi gambar 4K terbaik dan bandwidth mulai dari 100 Mbps. Dapatkan konten hiburan berkualitas yang dapat dinikmati kapan saja",
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
  <div class="bg-bg-100 dark:bg-gray-900">
    <HeroSection />
    <FeatureList />
    <CardProduct :paketan="paketan" :heading="heading" />
    <CTA :cta="cta" />
    <Card />
    <StaticNumber />
  </div>
</template>

<style scoped></style>
