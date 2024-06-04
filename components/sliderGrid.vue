<!-- <script setup lang="ts">
/* Modal Image per far comparire l'immagine tipo pop up
 */
import { onMounted } from "vue";

import "../assets/css/sliderGrid.css";
import imgtest from "../assets/img/image3.jpg";

import img1 from "../assets/img/img1.png";

const imgContainer = [
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
  { img: img1 },
];

const carousel = ref(null);
const items = ref([]); // Array di elementi nello slider
const activeIndex = ref(0); // Indice dello slide attivo

let numImagesPerSlide = 12; // Numero di immagini per slide
const numSlides = Math.ceil(imgContainer.length / numImagesPerSlide); // Calcola il numero di slide necessarie

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
              :src="
                imgContainer[(slide - 1) * numImagesPerSlide + index - 1]?.img
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <ul class="bullets-SliderGrid">
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
 -->

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import "../assets/css/sliderGrid.css";

// State variables
const projects = ref([]); // Array to store fetched images
const carousel = ref(null);
const items = ref([]);
const activeIndex = ref(0);

// Fetch images from the API
const fetchImages = async () => {
  try {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/singleproject?version=draft&token=CgdxbCXc3SKuMrQjSOH0NAtt"
    );
    const { story } = await response.json();
    const content = story.content;

    projects.value = content.body
      .filter((project) => project.imgSliderGrid)
      .flatMap((project) => project.imgSliderGrid.map((img) => ({ img })));

    console.log("grid Mapping project:", projects);
    console.log("grid2 Mapping project:", projects.value);

    calculateNumImagesPerSlide();
  } catch (error) {
    console.error("Errore nel recupero dei dati da Storyblok:", error);
  }
};

let numImagesPerSlide = 12; // Number of images per slide
const numSlides = ref(0); // Number of slides

const calculateNumImagesPerSlide = () => {
  numImagesPerSlide = window.innerWidth < 768 ? 4 : 12;
  numSlides.value = Math.ceil(projects.value.length / numImagesPerSlide);
};

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

onMounted(async () => {
  await fetchImages();
  numSlides.value = Math.ceil(projects.value.length / numImagesPerSlide);

  carousel.value = document.getElementById("carousel-SliderGrid");
  items.value = document.querySelectorAll(".square-SliderGrid");

  window.addEventListener("resize", calculateNumImagesPerSlide);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", calculateNumImagesPerSlide);
});
</script>

<template>
  <div class="bg-SliderGrid">
    <div id="wrapper-SliderGrid">
      <div id="carousel-SliderGrid">
        <div class="square-SliderGrid" v-for="slide in numSlides" :key="slide">
          <div v-for="index in numImagesPerSlide" :key="index">
            <img
              :src="
                projects[(slide - 1) * numImagesPerSlide + index - 1]?.img
                  .filename
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <ul class="bullets-SliderGrid">
      <li
        class="bullet-SliderGrid"
        :class="{ activeB: index === activeIndex }"
        v-for="(item, index) in numSlides"
        :key="index"
        @click="goToSlide(index)"
      ></li>
    </ul>
  </div>
</template>
