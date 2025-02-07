<script setup lang="ts">
import Section from "~/components/Section.vue";
import { useI18n } from "#imports";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Label } from "~/components/ui/label";

const route = useRoute();
const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="bg-[var(--color-background)] h-screen text-white">
    <Label>Current route: {{ route.path }}</Label>
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
    <Label>{{ t("projects") }}</Label>
    <Section class="relative mt-10">
      <NeonGrid />
      <ProjectCard />
    </Section>
  </div>
</template>
