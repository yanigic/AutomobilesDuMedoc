<script setup>
import "../assets/css/sliderGrid.css";
import imgtest from "../assets/img/image3.jpg";

const carousel = ref(null); // Assicurati di usare ref se `carousel` è un elemento DOM
const items = ref([]); // Array di elementi nello slider
const activeIndex = ref(0); // Indice dello slide attivo

onMounted(() => {
  carousel.value = document.getElementById("carousel-SliderGrid"); // Assumi che `#carousel` sia l'ID del div da scrollare
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
</script>
<template>
  <div class="bg-SliderGrid">
    <div id="wrapper-SliderGrid">
      <div id="carousel-SliderGrid">
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
        </div>
        <div class="square-SliderGrid">
          <div><img :src="imgtest" alt="" /></div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div class="square-SliderGrid">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
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
