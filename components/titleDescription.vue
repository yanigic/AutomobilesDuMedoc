<script setup lang="ts">
import "../assets/css/titleDescription.css";
const text = [
  {
    title: "Customization",
    description:
      "Our customization service enhances vehicles with unique designs and advanced materials, tailored to client specifications for a distinctive, improved driving experience and enhancing aesthetics.",
  },
  {
    title: "Restomod",
    description:
      "Restomod blends classic design with modern technology, enhancing historic vehicles with custom details and upgrades for improved performance and comfort while preserving their vintage charm.",
  },
  {
    title: "service",
    description:
      "Our vehicle maintenance service keeps your car performing optimally through routine check-ups, fluid replacements, and diagnostics, improving its reliability and longevity.",
  },
  {
    title: "restoration",
    description:
      "Our auto restoration service revitalizes classic cars by combining  original features with modern enhancements, ensuring each vehicle is  authentically restored to its original condition for improved  performance and reliability.",
  },
];
</script>

<template>
  <div class="container-layout">
    <div class="text-container" v-for="(title, index) in text" :key="index">
      <p class="title">{{ title.title }}</p>

      <p class="description">
        {{ title.description }}
      </p>
    </div>
  </div>
</template>
