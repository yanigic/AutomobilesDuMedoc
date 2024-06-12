<script setup lang="ts">
import "../assets/css/cardImageText.css";
import imgCard from "../assets/img/Bordeaux.jpg";

const contents = [
  {
    title: "Bordeaux",
    img: imgCard,
  },
];
const texts = [
  {
    description:
      "Bordeaux, located in the southwest of France, is world-renowned for its wines, with vineyards stretching for thousands of kilometers throughout the surrounding countryside. Besides its viticultural heritage, Bordeaux is also a cultural and commercial hub, hosting numerous artistic and historical institutions.",
  },
  {
    description:
      "Automobiles du Médoc establishes its main operations in the Bordeaux region, leveraging not only the strategic geographical position, which provides immediate access to major European routes, but also the extensive network of trade and distribution that the city offers.",
  },
  {
    description:
      "Recognizing the importance of expanding its network and operational  capabilities, Automobiles du Médoc also establishes a base in Milan,  Italy. With its central position in Europe and its dynamic economic  environment, Milan serves as a crucial point for the company's  international operations, facilitating the expansion of the business and  the logistic management of vehicles.",
  },
];
</script>

<template>
  <div class="bg-card-imgText">
    <div class="img-card-box" v-for="(content, index) in contents" :key="index">
      <img class="img-card-imgText" :src="imgCard" alt="" />
      <h2 class="title-card-imgText txt-color">{{ content.title }}</h2>
    </div>
    <div class="bg-card-imgText-text-container">
      <div
        class="text-card-imgText"
        v-for="(text, index) in texts"
        :key="index"
      >
        {{ text.description }}
      </div>
    </div>
  </div>
</template>
