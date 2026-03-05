<template>
  <div class="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"
    data-aos="fade-up" :data-aos-delay="delay">
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-start">
        <h3 class="text-xl font-semibold text-gray-900">{{ paket.name }}</h3>
        <span :class="[
          'text-xs px-3 py-1 rounded-full font-medium',
          paket.popular ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
        ]">
          {{ paket.speed }}
        </span>
      </div>
      <div class="flex items-baseline gap-1">
        <span class="text-3xl font-bold text-gray-900">{{ paket.price }}</span>
        <span class="text-gray-400 text-sm">/bulan</span>
      </div>
      <p class="text-gray-500 text-sm">{{ paket.description }}</p>
      <ul class="flex flex-col gap-2 mt-2">
        <li v-for="(feature, idx) in paket.features" :key="idx" class="text-sm text-gray-600 flex items-center gap-2">
          <svg class="w-4 h-4 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3">
            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ feature }}
        </li>
      </ul>
      <Button :variant="paket.popular ? 'primary' : 'secondary'" class="mt-4" block @click="$emit('select', paket)">
        Pilih Paket
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  paket: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

defineEmits(['select'])
</script>
