<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Skills from "@/pages/Skills.vue";
import Contact from "@/pages/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>
