<template>
  <section id="home" class="px-6 py-24 max-w-7xl mx-auto">
    <div class="flex flex-col gap-8 max-w-2xl">
      <div class="flex flex-col gap-4">
        <span class="text-sm font-medium text-blue-600 tracking-wider">INTERNET CEPAT INDONESIA</span>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
          Koneksi Stabil<br>Untuk Segala Aktivitas
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Nikmati pengalaman internet tanpa batas dengan kecepatan hingga 250 Mbps.
          Didukung teknologi fiber optic terbaru untuk koneksi yang stabil dan andal.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-3">
        <Button size="lg" @click="scrollToPaket">Lihat Paket</Button>
        <Button variant="secondary" size="lg" @click="scrollToKontak">Hubungi Kami</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../ui/Button.vue'

const scrollToPaket = () => {
  const element = document.getElementById('paket')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToKontak = () => {
  const element = document.getElementById('kontak')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
