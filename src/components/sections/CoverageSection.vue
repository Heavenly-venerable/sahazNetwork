<template>
  <section id="coverage" class="px-6 py-16 max-w-7xl mx-auto">
    <div class="flex flex-col gap-4 mb-12">
      <span class="text-sm font-medium text-blue-600 tracking-wider">JANGKAUAN</span>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        Cek Ketersediaan Jaringan
      </h2>
      <p class="text-gray-500 text-lg max-w-2xl">
        Masukkan lokasi Anda untuk mengetahui apakah layanan kami sudah tersedia.
      </p>
    </div>

    <div class="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
      <div class="flex flex-col md:flex-row gap-4">
        <input type="text" v-model="locationQuery" placeholder="Masukkan nama kecamatan atau kelurahan"
          class="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
          @keyup.enter="checkCoverage">
        <Button @click="checkCoverage">Cek Jaringan</Button>
      </div>

      <!-- Popular locations -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span class="text-xs text-gray-400 mr-2">Populer:</span>
        <button v-for="loc in popularLocations" :key="loc" @click="setLocation(loc)"
          class="text-xs text-gray-500 hover:text-blue-600 transition-colors">
          {{ loc }}
        </button>
      </div>

      <!-- Coverage Result -->
      <div v-if="coverageResult.show" class="mt-6 p-4 rounded-xl"
        :class="coverageResult.available ? 'bg-green-50' : 'bg-yellow-50'">
        <div class="flex items-start gap-3">
          <svg v-if="coverageResult.available" class="w-5 h-5 text-green-600 mt-0.5" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg v-else class="w-5 h-5 text-yellow-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <p class="font-medium" :class="coverageResult.available ? 'text-green-800' : 'text-yellow-800'">
              {{ coverageResult.message }}
            </p>
            <p class="text-sm mt-1" :class="coverageResult.available ? 'text-green-600' : 'text-yellow-600'">
              {{ coverageResult.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'

const locationQuery = ref('')
const popularLocations = ['Jakarta Pusat', 'Bandung', 'Surabaya', 'Medan', 'Makassar']
const coverageResult = ref({
  show: false,
  available: false,
  message: '',
  detail: ''
})

const setLocation = (location) => {
  locationQuery.value = location
  checkCoverage()
}

const checkCoverage = () => {
  if (!locationQuery.value) return

  const availableLocations = ['Jakarta Pusat', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Yogyakarta', 'Semarang', 'Palembang']
  const isAvailable = availableLocations.includes(locationQuery.value)

  coverageResult.value = {
    show: true,
    available: isAvailable,
    message: isAvailable ? 'Jaringan tersedia di lokasi Anda!' : 'Jaringan belum tersedia',
    detail: isAvailable
      ? 'Silakan hubungi kami untuk proses pendaftaran.'
      : 'Kami akan segera mengembangkan jaringan ke lokasi Anda. Silakan tinggalkan kontak Anda.'
  }
}
</script>
