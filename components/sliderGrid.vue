<script setup lang="ts">
/* Modal Image per far comparire l'immagine tipo pop up
 */
import { onMounted } from "vue";

import "../assets/css/sliderGrid.css";
import imgtest from "../assets/img/image3.jpg";

import img1 from "../assets/img/img1.png";

const projects = [
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
];

const carousel = ref(null);
const items = ref([]); // Array di elementi nello slider
const activeIndex = ref(0); // Indice dello slide attivo

let numImagesPerSlide = 12; // Numero di immagini per slide
const numSlides = Math.ceil(projects.length / numImagesPerSlide); // Calcola il numero di slide necessarie

onMounted(() => {
  calculateNumImagesPerSlide(); // Inizializza il numero di immagini per slide

  carousel.value = document.getElementById("carousel-SliderGrid");
  items.value = document.querySelectorAll(".square-SliderGrid"); // Array di elementi nello slider
});

const willLeftLessThan40pxToScrollEnd = (nextStep) => {
  const scrollLeftAfterTwoClicks = carousel.value.scrollLeft + nextStep * 2;
  return scrollLeftAfterTwoClicks > carousel.value.scrollWidth - 40;
};

const willLeftLessThan40pxToScrollStart = (nextStep) => {
  const scrollLeftAfterOneClick = carousel.value.scrollLeft - nextStep;
  return scrollLeftAfterOneClick < 40;
};

const handleClickGoAhead = () => {
  let nextStep = carousel.value.offsetWidth;
  if (willLeftLessThan40pxToScrollEnd(nextStep)) nextStep *= 2;

  carousel.value.scroll({
    left: carousel.value.scrollLeft + nextStep,
    behavior: "smooth",
  });
};

const handleClickGoBack = () => {
  let nextStep = carousel.value.offsetWidth;
  if (willLeftLessThan40pxToScrollStart(nextStep)) nextStep *= 2;

  carousel.value.scroll({
    left: carousel.value.scrollLeft - nextStep,
    behavior: "smooth",
  });
};

const goToSlide = (index) => {
  const slideWidth = carousel.value.offsetWidth;
  carousel.value.scroll({
    left: index * slideWidth,
    behavior: "smooth",
  });
  activeIndex.value = index;
};
const calculateNumImagesPerSlide = () => {
  numImagesPerSlide = window.innerWidth < 768 ? 4 : 12; // Cambia il numero di immagini per slide in base alla larghezza della finestra
};
</script>
<template>
  <div class="bg-SliderGrid">
    <div id="wrapper-SliderGrid">
      <div id="carousel-SliderGrid">
        <div class="square-SliderGrid" v-for="slide in numSlides" :key="slide">
          <div v-for="index in numImagesPerSlide" :key="index">
            <img
              :src="projects[(slide - 1) * numImagesPerSlide + index - 1]?.img"
              alt=""
            />
          </div>
          <!-- <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div> -->
        </div>
        <!-- <div class="square-SliderGrid">
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
        </div>
        <div class="square-SliderGrid">
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
          <div><img :src="imgtest" alt="" /></div>
        </div> -->
      </div>
    </div>

    <ul class="bullets-SliderGrid">
      <!-- Utilizzo degli li con un'icona come bullet -->
      <li
        class="bullet-SliderGrid"
        :class="{ activeB: index === activeIndex }"
        v-for="(item, index) in items"
        :key="index"
        @click="goToSlide(index)"
      ></li>
    </ul>
  </div>
</template>
