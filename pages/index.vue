<script setup lang="ts">
import Section from "~/components/Section.vue";
import { useI18n } from "#imports";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const route = useRoute();
const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="bg-[var(--color-background)] h-screen text-white">
    <p>Current route: {{ route.path }}</p>
    <Section>
      <Avatar size="lg">
        <AvatarImage src="/1663078267617.jpeg" alt="@shadcn" />
        <AvatarFallback>PIC</AvatarFallback>
      </Avatar>
      <div class="flex justify-center gap-4">
        <button @click="setLocale('en')">
          <Icon name="twemoji:flag-united-kingdom" class="w-6 h-6" />
        </button>
        <button @click="setLocale('fr')">
          <Icon name="twemoji:flag-france" class="w-6 h-6" />
        </button>
        <p>{{ t("welcome") }}</p>
      </div>
    </Section>
    <h1>{{ t("projects") }}</h1>
    <Section class="relative mt-10">
      <NeonGrid />
    </Section>
  </div>
</template>
