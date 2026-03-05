<template>
  <div class="pt-[70px]">
    <!-- Loading State -->
    <div v-if="loading" class="px-6 py-16 text-center">
      <div class="inline-block w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p class="text-gray-500 mt-4">Memuat artikel...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="!post" class="px-6 py-16 text-center">
      <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="1.5" />
        <path d="M12 8v4M12 16h.01" stroke-width="1.5" />
      </svg>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h2>
      <p class="text-gray-500 mb-6">Maaf, artikel yang Anda cari tidak ada.</p>
      <router-link to="/blog"
        class="bg-blue-600 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-700 transition-colors">
        Kembali ke Blog
      </router-link>
    </div>

    <!-- Blog Detail -->
    <div v-else class="max-w-4xl mx-auto px-6 py-16">
      <!-- Back Button -->
      <router-link to="/blog"
        class="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke-width="2" />
        </svg>
        Kembali ke Blog
      </router-link>

      <!-- Article Header -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <span>{{ post.date }}</span>
          <span>•</span>
          <span>{{ post.category }}</span>
          <span>•</span>
          <span>{{ post.readTime }} menit baca</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            {{ post.authorInitials }}
          </div>
          <div>
            <p class="font-medium text-gray-900">{{ post.author }}</p>
            <p class="text-sm text-gray-400">Penulis</p>
          </div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="h-80 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
        <svg class="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M8 2v20M16 2v20M2 8h20M2 16h20" />
        </svg>
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-500 leading-relaxed mb-6">{{ post.excerpt }}</p>

        <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pendahuluan</h2>
        <p class="text-gray-500 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p class="text-gray-500 leading-relaxed mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Poin Penting</h2>
        <ul class="list-disc pl-6 text-gray-500 leading-relaxed mb-4">
          <li class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li class="mb-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
          <li class="mb-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
          <li class="mb-2">Duis aute irure dolor in reprehenderit in voluptate velit</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
        <p class="text-gray-500 leading-relaxed mb-6">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <!-- Share -->
      <div class="border-t border-gray-100 mt-12 pt-8">
        <p class="text-sm font-medium text-gray-700 mb-3">Bagikan artikel ini:</p>
        <div class="flex gap-3">
          <button
            class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
            <svg class="w-5 h-5 fill-blue-600 transition-colors" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
              <path
                d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
            </svg>
          </button>
          <button
            class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
            <svg class="w-5 h-5 fill-blue-600 transition-colors" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
              <path
                d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const post = ref(null)

// Blog posts data (sama dengan di BlogView)
const blogPosts = [
  {
    id: 1,
    title: 'Tips Memilih Kecepatan Internet untuk Work From Home',
    excerpt: 'Bekerja dari rumah membutuhkan koneksi internet yang stabil. Simak panduan lengkap memilih paket internet yang tepat untuk kebutuhan WFH Anda.',
    date: '15 Mar 2024',
    category: 'Tips & Trik',
    author: 'Budi Santoso',
    authorInitials: 'BS',
    readTime: 5
  },
  {
    id: 2,
    title: 'Mengenal Teknologi Fiber Optic dan Keunggulannya',
    excerpt: 'Apa itu fiber optic? Mengapa teknologi ini lebih unggul dibanding kabel tembaga? Simak penjelasan lengkapnya di sini.',
    date: '12 Mar 2024',
    category: 'Teknologi',
    author: 'Rina Nurhayati',
    authorInitials: 'RN',
    readTime: 4
  },
  {
    id: 3,
    title: '5 Cara Mengatasi Internet Lemot di Rumah',
    excerpt: 'Internet terasa lambat? Coba 5 cara sederhana ini untuk mengoptimalkan koneksi internet di rumah Anda.',
    date: '10 Mar 2024',
    category: 'Tips & Trik',
    author: 'Ahmad Syarif',
    authorInitials: 'AS',
    readTime: 3
  },
  {
    id: 4,
    title: 'SahazNetwork Luncurkan Paket Gaming 250 Mbps',
    excerpt: 'Paket terbaru untuk para gamer dengan latency rendah dan koneksi prioritas. Cocok untuk gaming kompetitif.',
    date: '8 Mar 2024',
    category: 'Berita',
    author: 'Dewi Wijaya',
    authorInitials: 'DW',
    readTime: 2
  },
  {
    id: 5,
    title: 'Promo Spesial: Gratis Biaya Instalasi',
    excerpt: 'Dapatkan promo gratis biaya instalasi untuk pendaftaran bulan ini. Berlaku untuk semua paket!',
    date: '5 Mar 2024',
    category: 'Promo',
    author: 'Budi Santoso',
    authorInitials: 'BS',
    readTime: 2
  },
  {
    id: 6,
    title: 'Perbedaan Internet Fiber Optic dan ADSL',
    excerpt: 'Masih bingung memilih antara fiber optic dan ADSL? Simak perbandingan lengkapnya di sini.',
    date: '3 Mar 2024',
    category: 'Teknologi',
    author: 'Rina Nurhayati',
    authorInitials: 'RN',
    readTime: 4
  },
  {
    id: 7,
    title: 'Cara Setting WiFi agar Lebih Aman',
    excerpt: 'Lindungi jaringan WiFi Anda dari akses tidak sah dengan panduan setting keamanan ini.',
    date: '1 Mar 2024',
    category: 'Tips & Trik',
    author: 'Ahmad Syarif',
    authorInitials: 'AS',
    readTime: 3
  },
  {
    id: 8,
    title: 'Internet untuk Smart Home: Apa Saja yang Perlu Disiapkan?',
    excerpt: 'Ingin membangun smart home? Pastikan koneksi internet Anda mendukung dengan tips berikut.',
    date: '28 Feb 2024',
    category: 'Teknologi',
    author: 'Dewi Wijaya',
    authorInitials: 'DW',
    readTime: 4
  },
  {
    id: 9,
    title: 'SahazNetwork Raih Penghargaan ISP Terbaik 2024',
    excerpt: 'Penghargaan ini diberikan berdasarkan survei kepuasan pelanggan dan kualitas layanan.',
    date: '25 Feb 2024',
    category: 'Berita',
    author: 'Budi Santoso',
    authorInitials: 'BS',
    readTime: 2
  }
]

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    const found = blogPosts.find(p => p.id === parseInt(route.params.id))
    post.value = found
    loading.value = false
  }, 500)
})
</script>
