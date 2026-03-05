<template>
  <section id="why-us" class="px-6 py-16 max-w-7xl mx-auto">
    <div class="flex flex-col gap-4 mb-12">
      <span class="text-sm font-medium text-blue-600 tracking-wider">KEUNGGULAN</span>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        Mengapa Memilih SahazNetwork?
      </h2>
      <p class="text-gray-500 text-lg max-w-2xl">
        Kami memberikan pengalaman internet terbaik dengan berbagai keunggulan yang membedakan kami dari yang lain.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(item, index) in whyUsItems" :key="index" class="flex flex-col gap-3">
        <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <svg v-html="item.icon" class="w-6 h-6"></svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
        <p class="text-gray-500 leading-relaxed">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const whyUsItems = [
  {
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    title: 'Kecepatan Tinggi',
    description: 'Nikmati kecepatan internet hingga 250 Mbps untuk streaming, gaming, dan download tanpa buffering.'
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    title: 'Koneksi Stabil',
    description: 'Teknologi fiber optic menjamin koneksi tetap stabil meskipun digunakan oleh banyak perangkat.'
  },
  {
    icon: '<path d="M22 12h-4l-3 9-4-18-3 9H2" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    title: 'Dukungan 24/7',
    description: 'Tim teknis kami siap membantu Anda kapan saja dengan layanan customer service 24 jam.'
  }
]
</script>
