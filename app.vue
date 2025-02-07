<template>
  <div>
    <header>
      <!-- éventuel header / menu -->
    </header>

    <main>
      <!-- Contenu principal -->
      <NuxtPage />
    </main>

    <footer>
      <!-- éventuel footer -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Theme } from "~/public/theme";

onMounted(() => {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", Theme.colors.primary);
  root.style.setProperty("--color-secondary", Theme.colors.secondary);
  root.style.setProperty("--color-accent", Theme.colors.accent);
});
</script>

<style>
:root {
  --color-primary: #7e57c2;
  --color-secondary: #b39ddb;
  --color-accent: #ce93d8;
  --color-background: #0e0e0e;
}
</style>
