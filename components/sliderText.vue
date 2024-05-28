<template>
  <div>
    <div class="container-SliderText">
      <div v-for="(image, index) in images" :key="index" class="mySlides">
        <div class="numbertext">{{ index + 1 }} / {{ images.length }}</div>
        <img class="mySlidesimg" :src="image.src" style="width: 100%" />
      </div>

      <a class="prev" @click="plusSlides(-1)"
        ><svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.96387 38.7866L29.8235 17.927L51.0367 39.1402"
            stroke="#7C809B"
            stroke-width="5"
          />
        </svg>
      </a>

      <div class="container-SliderText" ref="sliderContainer">
        <div class="column-SliderText">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="demo cursor"
            @click="plusSlides(index + 1 - slideIndex.value)"
            :class="{ activeSliderText: index + 1 === slideIndex }"
          >
            {{ image.name }}
          </div>
        </div>
      </div>

      <a class="next" @click="plusSlides(1)"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M51.0361 21.2134L30.1765 42.073L8.96328 20.8598"
            stroke="#7C809B"
            stroke-width="5"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import "../assets/css/sliderText.css";
import cardImage from "../assets/img/grid/image64.jpg";
import cardImageOne from "../assets/img/grid/image73.jpg";
import cardImageTwo from "../assets/img/grid/image85.jpg";
import cardImageThree from "../assets/img/grid/image91.jpg";
import cardImageFor from "../assets/img/grid/image114.jpg";
import cardImageFive from "../assets/img/grid/image124.jpg";
import cardImageSixe from "../assets/img/grid/image135.jpg";
import cardImageSeven from "../assets/img/grid/image140.jpg";
import cardImageEight from "../assets/img/grid/image171.jpg";
import cardImageNine from "../assets/img/grid/image70.jpg";

// Immagini per lo slideshow
const images = ref([
  { src: cardImageFive, name: "4c Superleggera" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageOne, name: "defender amaranth" },
  { src: cardImageOne, name: "bmw m3 e46" },
  { src: cardImageFive, name: "4c Superleggera" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageOne, name: "defender amaranth" },
  { src: cardImageOne, name: "bmw m3 e46" },
]);

let slideIndex = ref(1);
const sliderContainer = ref(null); // Definire la ref qui per usarla globalmente nel setup

// Funzione per avanzare o retrocedere di una slide
function plusSlides(n) {
  const newIndex = slideIndex.value + n;
  slideIndex.value =
    newIndex < 1
      ? images.value.length
      : newIndex > images.value.length
      ? 1
      : newIndex;
  centerActiveText();
}

// Sposta la logica di aggiornamento del centro qui
function centerActiveText() {
  nextTick(() => {
    if (sliderContainer.value) {
      const slides = sliderContainer.value.querySelectorAll(".demo");
      const currentSlide = slides[slideIndex.value - 1];
      if (currentSlide) {
        // Calcola lo scorrimento necessario per centrare il testo
        const scrollY =
          currentSlide.offsetTop +
          currentSlide.offsetHeight / 2 -
          sliderContainer.value.offsetHeight / 2;
        sliderContainer.value.scrollTop = scrollY;
      }
    }
  });
}

onMounted(() => {
  plusSlides(0); // Inizializza la vista
});

watch(slideIndex, centerActiveText); // Aggiorna la vista quando slideIndex cambia
</script>
