<script lang="ts" setup>
import imgHero from "../assets/img/svg/admHero.svg";
import imgHeroMobile from "../assets/img/svg/admHeroMobile.svg";
import "../assets/css/heroAbout.css";
</script>

<template>
  <div class="height-hero-about">
    <div class="bg-img-about"><img :src="imgHero" alt="" /></div>
    <div class="bg-img-about-mobile"><img :src="imgHeroMobile" alt="" /></div>
  </div>
</template>
