<script setup >

import arrow from "../assets/img/svg/arrowRight.svg";
import "../assets/css/slider.css";

const carousel = ref(null); // Assicurati di usare ref se `carousel` è un elemento DOM
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);


function handleMouseDown(event) {
  isDragging.value = true;
  startX.value = event.pageX - carousel.value.offsetLeft;
  scrollLeft.value = carousel.value.scrollLeft;
}

function handleMouseMove(event) {
  if (!isDragging.value) return;
  event.preventDefault();
  const x = event.pageX - carousel.value.offsetLeft;
  const walk = (x - startX.value) * 3; // Il fattore 3 aumenta la sensibilità del trascinamento
  carousel.value.scrollLeft = scrollLeft.value - walk;
}

function handleMouseUp() {
  isDragging.value = false;
}


onMounted(() => {
  carousel.value = document.getElementById("carousel"); // Assumi che `#carousel` sia l'ID del div da scrollare

  carousel.value.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  carousel.value.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
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
        <div class="square"><img src="../assets/img/grid/image73.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image142.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image140.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image135.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image171.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image142.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image73.jpg" alt=""></div>
        <div class="square"><img src="../assets/img/grid/image142.jpg" alt=""></div>
       
      </div>
    </div>
    <div class="buttons-slider">
      <button class="btn-slider" @click="handleClickGoBack()">
        <img src="../assets/img/svg/arrowRight.svg" alt="" />
      </button>
      <button class="btn-slider" @click="handleClickGoAhead()">
        <img src="../assets/img/svg/arrowRight.svg" alt="" />
      </button>
    </div>
  </div>
</template>