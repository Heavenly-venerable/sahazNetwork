<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
    <div class="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-semibold tracking-tight cursor-pointer">
        <span class="text-gray-900">Sahaz</span>
        <span class="text-blue-600">Network</span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <router-link to="/" class="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/' }">
          Beranda
        </router-link>
        <router-link to="/about" class="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/about' }">
          Tentang
        </router-link>
        <router-link to="/blog" class="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/blog' }">
          Blog
        </router-link>
        <a href="#kontak" @click.prevent="scrollToContact"
          class="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          :class="{ 'text-blue-600 font-medium': $route.hash === '#kontak' }">
          Kontak
        </a>
        <Button size="sm" @click="handleDaftar">Daftar</Button>
      </div>

      <!-- Hamburger Button -->
      <button @click="toggleMobileMenu" class="md:hidden p-2 focus:outline-none">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span
            :class="['w-full h-0.5 bg-gray-600 transition-transform duration-300', isOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['w-full h-0.5 bg-gray-600 transition-opacity duration-300', isOpen ? 'opacity-0' : '']"></span>
          <span
            :class="['w-full h-0.5 bg-gray-600 transition-transform duration-300', isOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="['md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300', isOpen ? 'max-h-96' : 'max-h-0']">
      <div class="px-6 py-4 flex flex-col gap-4">
        <router-link to="/" @click="closeMenu" class="text-gray-600 hover:text-blue-600 py-2 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/' }">
          Beranda
        </router-link>
        <router-link to="/about" @click="closeMenu" class="text-gray-600 hover:text-blue-600 py-2 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/about' }">
          Tentang
        </router-link>
        <router-link to="/blog" @click="closeMenu" class="text-gray-600 hover:text-blue-600 py-2 transition-colors"
          :class="{ 'text-blue-600 font-medium': $route.path === '/blog' }">
          Blog
        </router-link>
        <a href="#kontak" @click="closeAndScrollToContact"
          class="text-gray-600 hover:text-blue-600 py-2 transition-colors cursor-pointer">
          Kontak
        </a>
        <Button size="sm" block @click="handleDaftar">Daftar</Button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from '../ui/Button.vue'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const scrollToContact = () => {
  if (route.path !== '/') {
    // Jika tidak di halaman home, navigasi ke home dulu
    router.push('/')
    // Tunggu navigasi selesai lalu scroll ke kontak
    setTimeout(() => {
      const element = document.getElementById('kontak')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  } else {
    // Jika sudah di halaman home, langsung scroll
    const element = document.getElementById('kontak')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const closeAndScrollToContact = () => {
  isOpen.value = false
  setTimeout(scrollToContact, 300)
}

const handleDaftar = () => {
  alert('Terima kasih atas minat Anda! Silakan hubungi kami di 1500-123 untuk proses pendaftaran.')
}
</script>
