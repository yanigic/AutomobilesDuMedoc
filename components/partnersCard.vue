<script setup lang="ts">
import "../assets/css/partnersCard.css";
import imgGarage from "../assets/img/svg/garage.svg";
import imgNewtron from "../assets/img/svg/newtron.svg";

const contents = [
  {
    title: "our partners",
    description:
      "Our vehicles are the product of collaborations with esteemed industry partners, who bring unmatched expertise and craftsmanship to every project. These alliances allow us to incorporate exceptional materials, advanced technologies, and innovative design techniques, ensuring each vehicle not only meets but exceeds the highest standards of luxury and performance.",
  },
];
const partners = [
  {
    name: imgGarage,
  },
  {
    name: imgNewtron,
  },
];
</script>

<template>
  <div class="bg-partnersCard">
    <div class="" v-for="(content, index) in contents" :key="index">
      <h3 class="title-partnersCard">{{ content.title }}</h3>
      <p class="description-partnersCard">{{ content.description }}</p>
    </div>
    <div class="box-img-partners">
      <div class="box-img-partnersCard">
        <img
          v-for="(logo, index) in partners"
          :key="index"
          :src="logo.name"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
