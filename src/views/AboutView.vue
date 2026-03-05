<template>
  <div class="pt-[70px]">
    <!-- Hero Section -->
    <section class="px-6 py-16 bg-blue-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Tentang SahazNetwork
        </h1>
        <p class="text-xl text-blue-100 leading-relaxed">
          Menghubungkan Indonesia dengan internet cepat dan stabil sejak 2020
        </p>
      </div>
    </section>

    <!-- Visi Misi -->
    <section class="px-6 py-16 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-4">
          <span class="text-sm font-medium text-blue-600 tracking-wider">VISI KAMI</span>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">Menjadi penyedia internet terdepan di Indonesia
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Kami bercita-cita untuk menghubungkan setiap rumah dan bisnis di Indonesia dengan internet berkualitas
            tinggi yang terjangkau.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-sm font-medium text-blue-600 tracking-wider">MISI KAMI</span>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">Memberikan layanan terbaik untuk pelanggan</h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Menyediakan infrastruktur fiber optic berkualitas, layanan pelanggan 24/7, dan harga yang kompetitif untuk
            semua lapisan masyarakat.
          </p>
        </div>
      </div>
    </section>

    <!-- Nilai-nilai Perusahaan -->
    <section class="px-6 py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-sm font-medium text-blue-600 tracking-wider">NILAI-NILAI KAMI</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-4">
            Yang Membuat Kami Berbeda
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(value, index) in companyValues" :key="index"
            class="bg-white p-6 rounded-2xl border border-gray-100 text-center" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
              <div v-html="value.icon" class="w-8 h-8"></div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-sm text-gray-500">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="px-6 py-16 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-sm font-medium text-blue-600 tracking-wider">PERJALANAN KAMI</span>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-4">
          Sejarah SahazNetwork
        </h2>
      </div>

      <div class="relative">
        <!-- Garis timeline -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden md:block"></div>

        <div class="space-y-12">
          <div v-for="(item, index) in timeline" :key="index"
            class="relative flex flex-col md:flex-row items-center gap-8"
            :class="{ 'md:flex-row-reverse': index % 2 === 1 }">

            <!-- Tahun -->
            <div class="md:w-1/2 flex justify-center md:justify-end" :class="{ 'md:justify-start': index % 2 === 1 }">
              <div class="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
                {{ item.year }}
              </div>
            </div>

            <!-- Konten -->
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                <p class="text-gray-500">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim -->
    <section class="px-6 py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-sm font-medium text-blue-600 tracking-wider">TIM KAMI</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-4">
            Para Ahli di Balik Layanan
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(member, index) in team" :key="index"
            class="bg-white p-6 rounded-2xl border border-gray-100 text-center" data-aos="fade-up"
            :data-aos-delay="index * 100">
            <div
              class="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">
              {{ member.initials }}
            </div>
            <h3 class="text-lg font-semibold text-gray-900">{{ member.name }}</h3>
            <p class="text-sm text-blue-600 mb-2">{{ member.position }}</p>
            <p class="text-xs text-gray-400">{{ member.experience }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 py-16 max-w-7xl mx-auto">
      <div class="bg-blue-600 text-white p-8 md:p-12 rounded-3xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Bergabung dengan Keluarga SahazNetwork
        </h2>
        <p class="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
          Rasakan sendiri kecepatan dan stabilitas internet dari kami
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="white" size="lg" @click="goToHome">Lihat Paket</Button>
          <Button variant="outline-light" size="lg" @click="goToContact">Hubungi Kami</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '../components/ui/Button.vue'

const router = useRouter()

const companyValues = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    title: 'Integritas',
    description: 'Kami menjunjung tinggi kejujuran dan transparansi dalam setiap layanan'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2v20"/></svg>',
    title: 'Inovasi',
    description: 'Selalu mengadopsi teknologi terbaru untuk layanan terbaik'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    title: 'Ketepatan',
    description: 'Komitmen terhadap kecepatan dan keandalan koneksi'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Kepedulian',
    description: 'Layanan pelanggan 24/7 yang siap membantu'
  }
]

const timeline = [
  {
    year: '2020',
    title: 'Awal Berdiri',
    description: 'SahazNetwork didirikan dengan visi menyediakan internet cepat untuk rumah tangga di Jakarta.'
  },
  {
    year: '2021',
    title: 'Ekspansi ke Kota Besar',
    description: 'Memperluas jangkauan ke Bandung, Surabaya, dan Medan dengan 10.000 pelanggan.'
  },
  {
    year: '2022',
    title: 'Layanan Fiber Optic',
    description: 'Meluncurkan teknologi fiber optic dengan kecepatan hingga 250 Mbps.'
  },
  {
    year: '2023',
    title: 'Penghargaan ISP Terbaik',
    description: 'Menerima penghargaan sebagai penyedia internet terbaik versi pelanggan.'
  },
  {
    year: '2024',
    title: '50.000+ Pelanggan',
    description: 'Telah dipercaya oleh lebih dari 50.000 pelanggan di seluruh Indonesia.'
  }
]

const team = [
  {
    initials: 'AS',
    name: 'Ahmad Syarif',
    position: 'CEO & Founder',
    experience: '15+ tahun di telekomunikasi'
  },
  {
    initials: 'RN',
    name: 'Rina Nurhayati',
    position: 'CTO',
    experience: '12+ tahun di jaringan'
  },
  {
    initials: 'BP',
    name: 'Budi Prasetyo',
    position: 'Head of Operations',
    experience: '10+ tahun di manajemen'
  },
  {
    initials: 'DW',
    name: 'Dewi Wijaya',
    position: 'Customer Service Manager',
    experience: '8+ tahun di layanan pelanggan'
  }
]

const goToHome = () => {
  router.push('/')
  setTimeout(() => {
    const element = document.getElementById('paket')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}

const goToContact = () => {
  router.push('/')
  setTimeout(() => {
    const element = document.getElementById('kontak')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}
</script>
