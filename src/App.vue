<template>
  <div class="min-h-screen bg-white font-sans antialiased">
    <Navbar />

    <main>
      <router-view />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
