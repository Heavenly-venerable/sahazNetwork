<template>
  <section id="testimonial" class="px-6 py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col gap-4 mb-12">
        <span class="text-sm font-medium text-blue-600 tracking-wider">TESTIMONIAL</span>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Apa Kata Pelanggan Kami
        </h2>
        <p class="text-gray-500 text-lg max-w-2xl">
          Pengalaman nyata dari pengguna layanan internet kami.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(testi, index) in testimonialItems" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
          <TestimonialCard :testimonial="testi" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from '../ui/TestimonialCard.vue'

const testimonialItems = [
  {
    name: 'Budi Santoso',
    initials: 'BS',
    occupation: 'Freelancer',
    rating: 5,
    comment: 'Internetnya sangat cepat dan stabil. Sangat membantu pekerjaan saya sebagai freelancer yang butuh koneksi handal.'
  },
  {
    name: 'Siti Rahma',
    initials: 'SR',
    occupation: 'Ibu Rumah Tangga',
    rating: 5,
    comment: 'Anak-anak bisa streaming dan belajar online tanpa buffering. Harganya juga terjangkau!'
  },
  {
    name: 'Ahmad Hidayat',
    initials: 'AH',
    occupation: 'Gamer',
    rating: 4,
    comment: 'Ping stabil untuk gaming. Jarang sekali lag atau disconnect. Recommended untuk para gamer.'
  }
]
</script>
