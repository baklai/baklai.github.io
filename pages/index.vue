<template>
  <div>
    <hero-section />
    <about-section />
    <repository-section />
    <contact-section />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RepositorySection from "@/components/RepositorySection";
import ContactSection from "@/components/ContactSection";

export default {
  layout: "default",
  components: {
    HeroSection,
    AboutSection,
    RepositorySection,
    ContactSection
  }
};
</script>
