<template>
  <section id="paket" class="px-6 py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-4 mb-12">
        <span class="text-sm font-medium text-blue-600 tracking-wider">PAKET INTERNET</span>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Pilih Paket Sesuai Kebutuhan
        </h2>
        <p class="text-gray-500 text-lg max-w-2xl">
          Tersedia berbagai pilihan paket dengan kecepatan dan harga yang kompetitif.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <PaketCard v-for="(paket, index) in paketItems" :key="index" :paket="paket" :delay="index * 100"
          @select="handleSelectPaket" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PaketCard from '../ui/PaketCard.vue'

const paketItems = [
  {
    name: 'Paket Basic',
    speed: '50 Mbps',
    price: 'Rp 250K',
    description: 'Cocok untuk penggunaan pribadi, streaming, dan browsing.',
    popular: false,
    features: ['Kecepatan 50 Mbps', 'Fiber Optic', 'Instalasi Gratis', 'Modem WiFi']
  },
  {
    name: 'Paket Family',
    speed: '150 Mbps',
    price: 'Rp 450K',
    description: 'Ideal untuk keluarga dengan 5-10 perangkat terhubung.',
    popular: true,
    features: ['Kecepatan 150 Mbps', 'Fiber Optic', 'Instalasi Gratis', 'Modem WiFi', 'Antivirus']
  },
  {
    name: 'Paket Gaming',
    speed: '250 Mbps',
    price: 'Rp 750K',
    description: 'Untuk gaming kompetitif dan streaming 4K tanpa lag.',
    popular: false,
    features: ['Kecepatan 250 Mbps', 'Fiber Optic', 'Prioritas Jaringan', 'Static IP', 'Dedicated Support']
  }
]

const handleSelectPaket = (paket) => {
  alert(`Anda memilih ${paket.name}. Silakan hubungi kami di 1500-123 untuk proses pendaftaran.`)
}
</script>
