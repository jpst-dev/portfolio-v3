<template>
  <div
    class="p-4 bg-zinc-800 rounded-lg shadow hover:shadow-lg transition"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <h3 class="text-lg font-semibold mb-2">{{ project.name }}</h3>
    <p class="text-sm text-zinc-400 mb-4">
      {{ project.description || "Sem descrição." }}
    </p>
    <div class="flex justify-between text-sm text-zinc-400">
      <span>{{ project.language }}</span>
      <span>⭐ {{ project.stargazers_count }}</span>
    </div>
    <a
      :href="project.html_url"
      target="_blank"
      class="block mt-4 text-emerald-400 hover:underline"
    >
      Ver no GitHub →
    </a>
  </div>
</template>

<script setup lang="ts">
import type { GitHubRepo } from "@/types/project";

defineProps<{
  project: GitHubRepo;
}>();
</script>
