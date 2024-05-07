<script lang="ts" setup>
import imgHero from "../assets/img/svg/admHero.svg";
import "../assets/css/paragraph.css";
import emptyLogo from "../assets/img/svg/emptyLogo.svg";

const texts = [
  {
    description:
      'Automobiles du Médoc specializes in bespoke vehicle customization, merging classic aesthetics with modern technology under the ethos of "Unbound Custom Excellence." We aim to transform each vehicle into a unique expression of its owner’s style.',
  },
];
</script>

<template>
  <div class="bg-description">
    <div><img :src="emptyLogo" alt="" /></div>
    <p v-for="(text, index) in texts" :key="index">{{ text.description }}</p>
    <div><img :src="emptyLogo" alt="" /></div>
  </div>
</template>
