<script setup>
import "../assets/css/slider.css";
import arrow from "../assets/img/svg/arrowRight.svg";

const carousel = ref(null); // Assicurati di usare ref se `carousel` è un elemento DOM

onMounted(() => {
  carousel.value = document.getElementById("carousel"); // Assumi che `#carousel` sia l'ID del div da scrollare
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
</script>
<template>
  <div class="bg-slider">
    <h3 class="text-big-title">Explore More</h3>
    <div id="wrapper">
      <div id="carousel">
        <div class="square">1</div>
        <div class="square">2</div>
        <div class="square">3</div>
        <div class="square">4</div>
        <div class="square">5</div>
        <div class="square">6</div>
        <div class="square">7</div>
      </div>
    </div>
    <div class="buttons-slider">
      <button class="btn-slider" @click="handleClickGoBack()">
        <img :src="arrow" alt="" />
      </button>
      <button class="btn-slider" @click="handleClickGoAhead()">
        <img :src="arrow" alt="" />
      </button>
    </div>
  </div>
</template>
