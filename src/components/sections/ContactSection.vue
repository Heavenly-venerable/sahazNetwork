<template>
  <section id="kontak" class="px-6 py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <span class="text-sm font-medium text-blue-600 tracking-wider">KONTAK</span>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Hubungi Kami
            </h2>
            <p class="text-gray-500 text-lg">
              Punya pertanyaan? Kami siap membantu Anda.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <!-- Telepon -->
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Telepon</p>
                <p class="font-medium text-gray-900">1500-123</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 6l-10 7L2 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <p class="font-medium text-gray-900">hello@sahaznetwork.com</p>
              </div>
            </div>

            <!-- Alamat -->
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Kantor Pusat</p>
                <p class="font-medium text-gray-900">Jl. Sudirman No. 123, Jakarta</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100">
          <form @submit.prevent="submitForm" class="flex flex-col gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" v-model="form.name" required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Masukkan nama Anda">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" v-model="form.email" required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="nama@email.com">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
              <input type="tel" v-model="form.phone"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="08xxxxxxxxxx">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea v-model="form.message" rows="4" required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Tulis pesan Anda..."></textarea>
            </div>

            <Button type="submit" size="lg" block>Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>
