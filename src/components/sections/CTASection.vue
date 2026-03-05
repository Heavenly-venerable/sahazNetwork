<template>
  <section class="px-6 py-16 max-w-7xl mx-auto">
    <div class="bg-blue-600 text-white p-8 md:p-12 rounded-3xl">
      <div class="flex flex-col gap-6 max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Siap untuk internet cepat?
        </h2>
        <p class="text-blue-100 text-lg leading-relaxed">
          Daftar sekarang dan dapatkan gratis biaya instalasi serta modem wifi untuk 3 bulan pertama.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <!-- Button Hubungi Kami -->
          <Button variant="white" size="lg" @click="handleHubungi"
            class="inline-flex items-center justify-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M22 16.92v3a1.999 1.999 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Hubungi Kami
          </Button>

          <!-- Button Lihat Lokasi -->
          <Button variant="outline-light" size="lg" @click="handleLokasi"
            class="inline-flex items-center justify-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Lihat Lokasi
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../ui/Button.vue'

const handleHubungi = () => {
  const element = document.getElementById('kontak')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleLokasi = () => {
  alert('Kantor pusat kami berada di Jl. Sudirman No. 123, Jakarta. Untuk lokasi lengkap, silakan hubungi customer service di 1500-123.')
}
</script>
