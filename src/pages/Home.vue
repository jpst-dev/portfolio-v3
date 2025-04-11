<template>
  <div class="min-h-screen text-white">
    <!-- Hero Section -->
    <section class="py-32 text-center bg-zinc-800 px-6">
      <h1 class="text-5xl font-bold text-emerald-400">
        Olá, eu sou João Teixeira 👋
      </h1>
      <p class="mt-4 text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
        Desenvolvedor front-end focado em Vue.js, TypeScript e interfaces
        modernas com alto desempenho.
      </p>
      <a
        href="#projects"
        class="inline-block mt-10 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded shadow text-white text-lg transition"
      >
        Ver Projetos
      </a>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="px-6 py-24 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-emerald-400 mb-12 text-center">
        Projetos em Destaque
      </h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { fetchProjects } from "@/services/github";
import type { GitHubRepo } from "@/types/project";

const projects = ref<GitHubRepo[]>([]);

onMounted(async () => {
  projects.value = await fetchProjects();
});
</script>
