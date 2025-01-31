<template>
  <section :class="[customClass, 'py-28 px-5 text-center bg-neutral-800']">
    <div class="max-w-6xl mx-auto">
      <h2 v-if="title" class="text-2xl mb-5">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  customClass?: string;
}>();
</script>