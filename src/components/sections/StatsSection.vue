<template>
  <section class="px-6 py-12 max-w-7xl mx-auto">
    <div class="grid grid-cols-3 gap-4 py-8 border-y border-gray-100">
      <div v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center"
        :class="{ 'border-x border-gray-100': index === 1 }">
        <span class="text-3xl md:text-4xl font-bold text-blue-600">{{ stat.value }}</span>
        <span class="text-xs md:text-sm text-gray-500 mt-1">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '50K+', label: 'Pelanggan Aktif' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Dukungan' }
]
</script>
