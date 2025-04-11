<template>
  <section
    id="skills"
    class="py-24 px-6 bg-gradient-to-b from-zinc-800 to-zinc-900 text-center"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-emerald-400 mb-12">Minhas Skills</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center transform transition duration-300 hover:scale-110"
        >
          <img :src="skill.icon" :alt="skill.name" class="w-14 h-14 mb-3" />
          <span class="text-zinc-300 text-sm">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
];
</script>
