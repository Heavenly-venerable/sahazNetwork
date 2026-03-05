<template>
  <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 transition-colors">
    <div class="h-48 bg-blue-50 flex items-center justify-center text-blue-600">
      <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
        <path d="M8 2v20M16 2v20M2 8h20M2 16h20"/>
      </svg>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <span>{{ post.date }}</span>
        <span>•</span>
        <span>{{ post.category }}</span>
      </div>
      <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">{{ post.title }}</h3>
      <p class="text-sm text-gray-500 mb-4 line-clamp-3">{{ post.excerpt }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">
            {{ post.authorInitials }}
          </div>
          <span class="text-xs text-gray-500">{{ post.author }}</span>
        </div>
        <router-link :to="`/blog/${post.id}`" class="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
          Baca
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
