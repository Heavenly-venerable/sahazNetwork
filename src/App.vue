<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

import Navbar from "./components/v2/Navbar.vue";
import Footer from "./components/v2/Footer.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const route = useRoute();
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <Navbar @switch="toggleDark()" />
    <router-view class="pt-16" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
