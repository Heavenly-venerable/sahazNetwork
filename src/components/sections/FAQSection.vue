<template>
  <section id="faq" class="px-6 py-16 max-w-7xl mx-auto">
    <div class="flex flex-col gap-4 mb-12">
      <span class="text-sm font-medium text-blue-600 tracking-wider">FAQ</span>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        Pertanyaan Umum
      </h2>
      <p class="text-gray-500 text-lg max-w-2xl">
        Temukan jawaban untuk pertanyaan yang sering diajukan.
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      <div v-for="(faq, index) in faqItems" :key="index" class="border-b border-gray-100 last:border-0">
        <button @click="toggleFaq(index)" class="w-full py-5 flex justify-between items-center text-left">
          <span class="font-medium text-gray-900">{{ faq.question }}</span>
          <svg class="w-5 h-5 text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }"
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div v-show="faq.isOpen" class="pb-5 text-gray-500 text-sm leading-relaxed">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqItems = ref([
  {
    question: 'Bagaimana cara daftar internet SahazNetwork?',
    answer: 'Anda dapat mendaftar melalui website ini dengan mengklik tombol "Daftar" atau menghubungi customer service kami di nomor 1500-123.',
    isOpen: false
  },
  {
    question: 'Apakah ada biaya instalasi?',
    answer: 'Untuk pendaftaran bulan ini, biaya instalasi GRATIS! Anda hanya perlu membayar biaya langganan bulan pertama.',
    isOpen: false
  },
  {
    question: 'Berapa lama proses aktivasi setelah daftar?',
    answer: 'Proses aktivasi biasanya memakan waktu 1-2 hari kerja setelah pendaftaran dan pembayaran dilakukan.',
    isOpen: false
  },
  {
    question: 'Apakah bisa ganti paket di tengah bulan?',
    answer: 'Ya, Anda dapat meningkatkan paket kapan saja. Perubahan akan berlaku di bulan berikutnya.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen
}
</script>
