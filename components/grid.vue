<template>
  <div class="test">
    <div class="container-grid">
      <div class="box-grid">
        <swiper
          :slidesPerView="4"
          :grid="{ rows: 3 }"
          :spaceBetween="10"
          :pagination="{ clickable: true }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide class="swiper-slide">Slide 1</swiper-slide>

          <swiper-slide class="swiper-slide">Slide 2</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 3</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 4</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 5</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 6</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 7</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 9</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 10</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 11</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 12</swiper-slide>

          <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 2</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 3</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 4</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 5</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 6</swiper-slide
          ><swiper-slide class="swiper-slide">Slide 7</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 9</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 10</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 11</swiper-slide>
          <swiper-slide class="swiper-slide">Slide 12</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>
