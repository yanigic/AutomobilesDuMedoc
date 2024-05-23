<script lang="ts" setup>
import "../assets/css/bannerProject.css";
import img1 from "../assets/img/img1.png";

const projects = [
  {
    title: "alfa romeo superclassica",
    img: img1,
       },
       {
    title: "abarth 695 corsa",
    img: img1,
       },
       {
    title: "cherry countach",
    img: img1,
       },
];
</script>

<template>
  <div class="bg-banner"  v-for="project in projects">
    <div class="title-banner">
      <h2 class="title-bannerProject">
        {{ project.title }}<svg
          class="svg-banner"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
        >
          <path
            id="Union"
            d="M26.5984 5.73224H3.13398V0.732239H35.134V33.2322H30.134V9.26777L4.40174 35L0.866211 31.4645L26.5984 5.73224Z"
            fill="#02020B"
          />
        </svg>
      </h2>
    </div>
    <div class="img-container"><img :src="project.img" alt="" /></div>
  </div>
</template>
