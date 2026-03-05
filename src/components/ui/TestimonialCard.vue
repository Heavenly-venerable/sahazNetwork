<template>
  <div class="bg-white p-6 rounded-2xl border border-gray-100">
    <div class="flex gap-1 mb-4">
      <svg v-for="star in 5" :key="star" class="w-4 h-4"
        :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20"
        fill="currentColor">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    <p class="text-gray-600 mb-4 text-sm leading-relaxed">"{{ testimonial.comment }}"</p>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
        {{ testimonial.initials }}
      </div>
      <div>
        <h4 class="font-medium text-gray-900">{{ testimonial.name }}</h4>
        <p class="text-xs text-gray-400">{{ testimonial.occupation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})
</script>
