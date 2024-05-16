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
      <div class="row-SliderText">
        <div
          class="column-SliderText"
          style="max-height: 300px; overflow-y: auto"
          ref="sliderContainer"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="demo cursor"
            @click="currentSlide(index + 1)"
            :alt="'Slide ' + (index + 1)"
            :class="{ activeSliderText: index + 1 === slideIndex }"
          >
            {{ image.name }}
          </div>
        </div>
      </div>

      <!-- <div class="row-SliderText">
        <div
          class="column-SliderText" 
          v-for="(image, index) in images"
          :key="index"
        >
          <div
            class="demo cursor"
            @click="currentSlide(index + 1)"
            :alt="'Slide ' + (index + 1)"
          >
            {{ image.name }}
          </div>
          <!- <img
            class="demo cursor"
            :src="image.src"
            style="width: 100%"
            @click="currentSlide(index + 1)"
            :alt="'Slide ' + (index + 1)"
          /> --
        </div>
      </div> -->
      <a class="next" @click="plusSlides(+1)"
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
import { ref, onMounted } from "vue";
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
  { src: cardImageFive, name: "4c Superleggera benz v12" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageOne, name: "defender amaranth" },
  { src: cardImageOne, name: "bmw m3 e46" },
  { src: cardImageFive, name: "4c Superleggera benz v12" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageOne, name: "defender amaranth" },
  { src: cardImageOne, name: "bmw m3 e46" },
]);

let slideIndex = ref(1);

// Funzione per avanzare o retrocedere di una slide
function plusSlides(n) {
  showSlides((slideIndex.value += n));
  scrollActiveSlideToTop();
}

// Funzione per visualizzare una slide specifica
function currentSlide(n) {
  slideIndex.value = n;
  showSlides(n);
  scrollActiveSlideToTop();
}

// Funzione per mostrare le slide
function showSlides(n) {
  let i;
  const sliderContainer = ref(null);

  if (sliderContainer.value) {
    const slides = sliderContainer.value.getElementsByClassName(".demo");
    const dots = sliderContainer.value.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex.value = 1;
    }
    if (n < 1) {
      slideIndex.value = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSliderText", "");
    }
    slides[slideIndex.value - 1].style.display = "block";
    dots[slideIndex.value - 1].className += " activeSliderText";
    captionText.innerHTML = dots[slideIndex.value - 1].alt;
  }
}
function scrollActiveSlideToTop() {
  const sliderContainer = document.querySelector(".column-SliderText");
  const activeSlide = sliderContainer.querySelector(".activeSliderText");
  if (sliderContainer && activeSlide) {
    sliderContainer.scrollTop = activeSlide.offsetTop;
  }
}

onMounted(() => {
  showSlides(slideIndex.value);
});
</script>
