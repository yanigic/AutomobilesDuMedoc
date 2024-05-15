<script setup>
import "../assets/css/sliderGrid.css";
import arrow from "../assets/img/svg/arrowRight.svg";
import imgtest from "../assets/img/image3.jpg";

const carousel = ref(null); // Assicurati di usare ref se `carousel` è un elemento DOM

onMounted(() => {
  carousel.value = document.getElementById("carousel-SliderGrid"); // Assumi che `#carousel` sia l'ID del div da scrollare
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
    <div class="buttons-SliderGrid">
      <button class="btn-SliderGrid" @click="handleClickGoBack()">
        <img :src="arrow" alt="" />
      </button>
      <button class="btn-SliderGrid" @click="handleClickGoAhead()">
        <img :src="arrow" alt="" />
      </button>
    </div>
  </div>
</template>
