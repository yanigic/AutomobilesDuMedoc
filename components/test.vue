<template>
  <div class="slider-projects-container">
    <button class="prev-btn" @click="plusSlides(-1)">
      <svg
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
    </button>

    <div class="slider-content" @wheel="debouncedHandleWheel">
      <div class="leftTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentActiveImage }"
          v-for="(info, index) in projectsList"
          :key="index"
        >
          <!-- foto prima e la 5 in poi -->
          <img
            v-show="index % 4 === 0"
            :src="info.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container">
            <!-- titolo immagini -->
            <!--  <p>{{ index }}{{ info.name }}</p> -->

            <!-- descrizione -->
          </div>
        </div>
      </div>
      <div class="leftBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentActiveImage }"
          v-for="(info, index) in projectsList"
          :key="index"
        >
          <img
            v-show="(index - 1) % 4 === 0"
            :src="info.src"
            :alt="'indice ' + index"
          />
          <div class="image-text-container">
            <!--  <p>{{ index }}{{ info.name }}</p> -->
          </div>
        </div>
      </div>

      <div class="rightTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentActiveImage }"
          v-for="(info, index) in projectsList"
          :key="index"
        >
          <img
            v-show="(index - 2) % 4 === 0"
            :src="info.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container">
            <!--  <p>{{ index }} {{ info.name }}</p> -->
          </div>
        </div>
      </div>
      <div class="rightBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentActiveImage }"
          v-for="(info, index) in projectsList"
          :key="index"
        >
          <img
            v-show="(index - 3) % 4 === 0"
            :src="info.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container">
            <!--  <p>{{ index }} {{ info.name }}</p> -->
          </div>
        </div>
      </div>

      <div class="slider-text-container">
        <div
          class="slider-tex"
          :class="index === currentActiveImage ? 'active' : ''"
          v-for="(info, index) in projectsList"
        >
          <div class="image-text-container">
            <!-- titolo immagini -->
            <h3>{{ info.name }}</h3>
            <!-- descrizione -->
          </div>
        </div>
      </div>
    </div>
    <button class="next-btn" @click="plusSlides(+1)">
      <svg
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
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import "../assets/css/sliderText.css";
import cardImage from "../assets/img/grid/image64.jpg";
import cardImageOne from "../assets/img/imgSinglePro.jpeg";
import cardImageTwo from "../assets/img/grid/image85.jpg";
import cardImageThree from "../assets/img/grid/image91.jpg";
import cardImageFor from "../assets/img/grid/image114.jpg";
import cardImageFive from "../assets/img/grid/image124.jpg";
import cardImageSixe from "../assets/img/grid/image135.jpg";
import cardImageSeven from "../assets/img/grid/image140.jpg";
import cardImageEight from "../assets/img/grid/image171.jpg";
import cardImageNine from "../assets/img/grid/image70.jpg";

let currentActiveImage = ref(0);
// Immagini per lo slideshow
const projectsList = ref([
  { src: cardImageOne, name: "4c Superleggera" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageOne, name: "defender amaranth" },
  { src: cardImageSixe, name: "bmw m3 e46" },
  { src: cardImageFive, name: "4c Superleggera" },
  { src: cardImageThree, name: "cherry countach" },
  { src: cardImageSeven, name: "defender amaranth" },
  /* { src: cardImageEight, name: "bmw m3 e46" }, */
]);

// Funzione per avanzare o retrocedere di una slide
function plusSlides(n: number) {
  currentActiveImage.value =
    (currentActiveImage.value + n + projectsList.value.length) %
    projectsList.value.length;

  if (currentActiveImage.value < 0) {
    currentActiveImage.value = projectsList.value.length - 1;
  } else if (currentActiveImage.value > projectsList.value.length) {
    currentActiveImage.value = projectsList.value.length;
  }
}

/* scroll */
/* function handleWheel(event: WheelEvent) {
  if (event.deltaY > 0) {
    plusSlides(1);
  } else {
    plusSlides(-1);
  }
}

// Funzione debounce
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Applica il debounce all'evento wheel
const debouncedHandleWheel = debounce(handleWheel, 25);
 */
/* per far scorrere le immagini in auto */
/* onMounted: {
  setInterval(() => {
    plusSlides(1);
  }, 3000);
}
 */
</script>
<style>
.leftTop_side_container {
  left: 5%;
  top: -25%;
}
.leftBottom_side_container {
  left: 5%;
  bottom: -25%;
}
.rightBottom_side_container {
  right: 5%;
  bottom: -25%;
}
.rightTop_side_container {
  right: 5%;
  top: -25%;
}
.rightBottom_side_container,
.rightTop_side_container,
.leftBottom_side_container,
.leftTop_side_container {
  position: absolute;
  height: 300px;
  width: 300px;
  margin: auto;
  z-index: -1;
}
.single-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s;
}

.single-image.active {
  opacity: 1;
  color: blueviolet;
}
.slider-tex.active h3 {
  color: var(--ADM-Yellow, #f3f90a);
  text-align: center;
  font-family: var(--Superclarendon);
  font-size: var(--font-size-text-one);
  font-style: normal;
  font-weight: 300;
  line-height: 4rem; /* 91.111% */
  letter-spacing: -0.05625rem;
  text-transform: uppercase;
}

.single-image.active p {
  color: blueviolet;
}
.single-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.single-image .image-text-container {
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: right;
  color: blue;
}

.image-text-container {
  text-align: center;
}
h3 {
  color: var(--ADM-Grey, #7c809b);
  text-align: center;
  font-family: var(--Superclarendon);
  font-size: var(--font-size-text-one);
  font-style: normal;
  font-weight: 300;
  line-height: 4rem; /* 91.111% */
  letter-spacing: -0.05625rem;
  text-transform: uppercase;
}
.prev-btn,
.next-btn {
  margin: auto;
  display: flex;
}
.slider-projects-container {
  background-color: var(--burnout-black);
  padding-top: var(--vertical-space-xlarg);
  padding-bottom: var(--vertical-space-xlarg);
  position: relative;
}
.prev-btn {
  margin-bottom: var(--vertical-space-larg);
}
.next-btn {
  margin-top: var(--vertical-space-larg);
}
.prev-btn:hover svg path,
.next-btn:hover svg path {
  stroke: var(--beam-yellow);
}
.slider-content {
  position: relative;
  z-index: 0;
}
</style>
