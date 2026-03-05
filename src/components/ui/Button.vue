<template>
  <button :class="[
    'rounded-full font-medium transition-colors inline-flex items-center justify-center',
    variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : '',
    variant === 'secondary' ? 'border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600' : '',
    variant === 'outline-light' ? 'border border-white/30 text-white hover:bg-white/10' : '',
    variant === 'white' ? 'bg-white text-blue-600 hover:bg-gray-100' : '',
    size === 'sm' ? 'px-5 py-2 text-sm' : '',
    size === 'md' ? 'px-6 py-3 text-sm' : '',
    size === 'lg' ? 'px-8 py-4 text-base' : '',
    block ? 'w-full' : '',
    className
  ]" :type="type" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline-light', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  block: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>
