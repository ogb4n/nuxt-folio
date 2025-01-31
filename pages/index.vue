<script setup lang="ts">
import Section from '~/components/Section.vue';
import { useI18n } from '#imports';

const route = useRoute();
const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="bg-[#0e0e0e] h-screen text-white">
    <p>Current route: {{ route.path }}</p>
    <Section>
      <div class="flex justify-center gap-4">
        <button @click="setLocale('en')">
          <Icon name="twemoji:flag-united-kingdom" class="w-6 h-6" />
        </button>
        <button @click="setLocale('fr')">
          <Icon name="twemoji:flag-france" class="w-6 h-6" />
        </button>
        <p>{{ t('welcome') }}</p>
      </div>
    </Section>
  </div>
</template>

