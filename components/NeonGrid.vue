<template>
  <div
    class="absolute inset-0 [background-image:linear-gradient(hotpink_1px,transparent_1px),linear-gradient(90deg,hotpink_1px,transparent_1px)] [background-size:40px_40px] animate-diagonal-roll"
  ></div>
</template>

<script setup></script>

<style scoped>
@keyframes diagonal-roll {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 80px 80px, 80px 80px;
  }
}

.animate-diagonal-roll {
  animation: diagonal-roll 30s linear infinite;
}
</style>
