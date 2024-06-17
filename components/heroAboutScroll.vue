<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import imgHero from "../assets/img/svg/admHero.svg";
import imgHeroMobile from "../assets/img/svg/admHeroMobile.svg";
import "../assets/css/heroAbout.css";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  const imgSfondo = document.getElementById("imgSfondo");

  if (imgSfondo) {
    let value = window.scrollY;
    imgSfondo.style.top = value * -1.5 + "px";
    /* imgSfondo.style.left = value * -1.5 + "px"; */
    console.log("isScrolled:", isScrolled.value); // Verify scroll
    console.log("valore:", imgSfondo.style.left); // Verify scroll
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="sfondo">
    <div class="heroAboutScroll-container">
      <img class="desktop-logo" id="imgLogo" :src="imgHero" alt="Hero Image" />
      <img
        class="mobile"
        id="imgLogo "
        src="/Users/yanilettetejeda/Documents/Code/projects/adm/assets/img/svg/admHeroMobile.svg"
        alt="Hero Image"
      />
      <img
        id="imgSfondo"
        src="../assets/img/Background2.png"
        alt="Background Image"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.sfondo {
  background-color: black;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.heroAboutScroll-container #imgSfondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 0;
}
#imgLogo {
  z-index: 1;
  position: relative;
}
.mobile {
  display: none;
}
.desktop-logo {
  width: 100%;
}
@media only screen and (max-width: 730px) {
  .desktop-logo {
    display: none;
  }
  .mobile {
    display: inline;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
