<template>
  <div class="pt-[70px]">
    <!-- Hero Section -->
    <section class="px-6 py-16 bg-blue-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Blog & Artikel
        </h1>
        <p class="text-xl text-blue-100 leading-relaxed">
          Tips, berita, dan informasi seputar internet dan teknologi
        </p>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="px-6 py-8 border-b border-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-4 justify-between items-center">
          <!-- Search -->
          <div class="relative w-full md:w-96">
            <input type="text" v-model="searchQuery" placeholder="Cari artikel..."
              class="w-full px-4 py-3 pl-10 rounded-full border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors">
            <svg class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24"
              fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" stroke-width="2" />
              <path d="M21 21l-4.35-4.35" stroke-width="2" />
            </svg>
          </div>

          <!-- Categories -->
          <div class="flex gap-2 flex-wrap">
            <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
              class="px-4 py-2 rounded-full text-sm transition-colors"
              :class="selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="px-6 py-16">
      <div class="max-w-7xl mx-auto">
        <!-- Featured Post -->
        <div v-if="filteredPosts.length > 0" class="mb-12">
          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div class="grid md:grid-cols-2">
              <div class="h-64 md:h-auto bg-blue-50 flex items-center justify-center text-blue-600">
                <svg class="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                  <path d="M8 2v20M16 2v20M2 8h20M2 16h20" />
                </svg>
              </div>
              <div class="p-8 flex flex-col justify-center">
                <div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span>{{ filteredPosts[0].date }}</span>
                  <span>•</span>
                  <span>{{ filteredPosts[0].category }}</span>
                  <span>•</span>
                  <span class="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Featured</span>
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ filteredPosts[0].title }}</h2>
                <p class="text-gray-500 mb-6">{{ filteredPosts[0].excerpt }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {{ filteredPosts[0].authorInitials }}
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ filteredPosts[0].author }}</p>
                      <p class="text-xs text-gray-400">{{ filteredPosts[0].readTime }} menit baca</p>
                    </div>
                  </div>
                  <router-link :to="`/blog/${filteredPosts[0].id}`"
                    class="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                    Baca
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid Posts -->
        <div class="grid md:grid-cols-3 gap-6">
          <BlogCard v-for="post in paginatedPosts" :key="post.id" :post="post" data-aos="fade-up" />
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-12">
          <button @click="currentPage--" :disabled="currentPage === 1"
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" stroke-width="2" />
            </svg>
          </button>

          <button v-for="page in totalPages" :key="page" @click="currentPage = page"
            class="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors"
            :class="currentPage === page ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600'">
            {{ page }}
          </button>

          <button @click="currentPage++" :disabled="currentPage === totalPages"
            class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" stroke-width="2" />
            </svg>
          </button>
        </div>

        <!-- No Results -->
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="1.5" />
            <path d="M12 8v4M12 16h.01" stroke-width="1.5" />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Tidak ada artikel ditemukan</h3>
          <p class="text-gray-500">Coba gunakan kata kunci atau kategori lain</p>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="px-6 py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 mb-4">
          Dapatkan Update Terbaru
        </h2>
        <p class="text-gray-500 text-lg mb-8">
          Berlangganan newsletter kami untuk mendapatkan tips dan informasi terbaru
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" v-model="newsletterEmail" placeholder="Email Anda" required
            class="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors">
          <Button type="submit">Berlangganan</Button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Button from '../components/ui/Button.vue'
import BlogCard from '../components/ui/BlogCard.vue'

// Search and filter
const searchQuery = ref('')
const selectedCategory = ref('Semua')
const categories = ['Semua', 'Tips & Trik', 'Berita', 'Teknologi', 'Promo']

// Pagination
const currentPage = ref(1)
const postsPerPage = 6

// Newsletter
const newsletterEmail = ref('')

// Blog posts data
const blogPosts = ref([
  {
    id: 1,
    title: 'Tips Memilih Kecepatan Internet untuk Work From Home',
    excerpt: 'Bekerja dari rumah membutuhkan koneksi internet yang stabil. Simak panduan lengkap memilih paket internet yang tepat untuk kebutuhan WFH Anda.',
    date: '15 Mar 2024',
    category: 'Tips & Trik',
    author: 'Budi Santoso',
    authorInitials: 'BS',
    readTime: 5,
    featured: true
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
])

// Filter posts based on search and category
const filteredPosts = computed(() => {
  return blogPosts.value.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'Semua' || post.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  // Skip featured post on first page
  if (currentPage.value === 1) {
    return filteredPosts.value.slice(1, end)
  }
  return filteredPosts.value.slice(start, end)
})

// Reset page when filter changes
const resetPage = () => {
  currentPage.value = 1
}

// Watch for filter changes
watch([searchQuery, selectedCategory], () => {
  resetPage()
})

const subscribeNewsletter = () => {
  alert(`Terima kasih! Anda telah berlangganan newsletter dengan email: ${newsletterEmail.value}`)
  newsletterEmail.value = ''
}
</script>
