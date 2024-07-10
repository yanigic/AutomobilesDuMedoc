<template>
  <div class="pageLayout">
    <div>
      <div class="leftTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === highlightedIndex }"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            v-show="index % 4 === 0"
            :src="slide.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>
      <div class="leftBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === highlightedIndex }"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            v-show="(index - 1) % 4 === 0"
            :src="slide.src"
            :alt="'indice ' + index"
          />
          <div class="image-text-container"></div>
        </div>
      </div>

      <div class="rightTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === highlightedIndex }"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            v-show="(index - 2) % 4 === 0"
            :src="slide.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>

      <div class="rightBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === highlightedIndex }"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            v-show="(index - 3) % 4 === 0"
            :src="slide.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="custom-swiper-button-prev custom-nav">
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
      </div>
      <swiper
        @swiper="setThumbsSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :direction="'vertical'"
        :spaceBetween="10"
        :slidesPerView="slidesPerView"
        :freeMode="true"
        :watchSlidesProgress="true"
        :mousewheel="true"
        :modules="modules"
        :navigation="{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }"
        :initialSlide="initialSlide"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          240: {
            slidesPerView: 9,
          },
          640: {
            slidesPerView: 9,
          },
          735: {
            slidesPerView: 5,
          },
          1180: {
            slidesPerView: 5,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          v-slot="{ isActive }"
          :class="{ highlight: index === highlightedIndex }"
        >
          <a :href="slide.href">
            {{ slide.name }}
          </a>
        </swiper-slide>
      </swiper>

      <div class="custom-swiper-button-next custom-nav">
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
            transform="rotate(180,30,30)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import cheryCountach from "../assets/img/Cherry_Countach.jpeg";
import Superleggera from "../assets/img/4C_Superleggera.jpeg";
import BenzV12 from "../assets/img/Benz_V12.jpeg";
import defender from "../assets/img/Defender_Amaranth.jpeg";
import BMWM3E46 from "../assets/img/BMW_M3_E46.jpeg";

import { ref, watch, onMounted } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Mousewheel,
  Pagination,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const initialSlide = 0;
    const slides = ref([
      { name: "4c Superleggera", src: Superleggera, href: "singleProject" },
      { name: "benz v12", src: BenzV12, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
      { name: "bmw m3 e46", src: BMWM3E46, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
      { name: "benz v12", src: BenzV12, href: "singleProject" },
      { name: "4c Superleggera", src: Superleggera, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
      { name: "defender amaranth", src: defender, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
    ]);

    const highlightedIndex = ref((initialSlide + 1) % slides.value.length);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const onSlideChange = (swiper) => {
      /*highlightedIndex.value = (swiper.realIndex + 6) % slides.value.length;*/
      const width = window.innerWidth;
      if (width < 640) {
        highlightedIndex.value = (swiper.realIndex + 4) % slides.value.length;
      } else if (width < 736) {
        highlightedIndex.value = (swiper.realIndex + 4) % slides.value.length;
      } else if (width < 1024) {
        highlightedIndex.value = (swiper.realIndex + 2) % slides.value.length;
      } else {
        highlightedIndex.value = (swiper.realIndex + 2) % slides.value.length;
      }
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      onSlideChange,
      slides,
      initialSlide,
      highlightedIndex,
      modules: [FreeMode, Navigation, Thumbs, Mousewheel, Pagination],
    };
  },
};
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

.swiper-button-prev {
  left: -30px;
}

.swiper-button-next {
  right: -30px;
}
.custom-nav {
  display: flex;
  justify-content: center;
  transform: rotateZ(180deg);
}

.custom-nav svg {
  width: 60px;
  height: 60px;
  fill: none;
  stroke: #7c809b;
  stroke-width: 5;
}

#app {
  height: 100%;
}
.pageLayout {
  display: flex;
  align-items: center;
  height: 80vh;
  justify-content: center;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  color: var(--ADM-Grey, #7c809b);
}
.swiper-button-prev {
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
}
/* Center slide text vertically */

.swiper-slide {
  text-align: center;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--ADM-Grey, #7c809b);

  font-family: var(--Superclarendon, "Superclarendon");
  font-size: var(--font-size-text-one, 4.0625rem);
  font-style: normal;
  font-weight: 300;
  line-height: 4rem;
  letter-spacing: -0.05625rem;
  text-transform: uppercase;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper-pagination {
  display: none;
}

.mySwiper {
  height: 50vh;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  height: 10%;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-wrapper {
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
}
.highlight {
  color: var(--ADM-Yellow, #f3f90a);
}

/* foto di sfondo */
.active.single-image {
  opacity: 1;
}
.single-image.active {
  opacity: 1;
}

.leftTop_side_container {
  position: absolute;
  left: 20%;
  top: 25%;
}
.leftBottom_side_container {
  position: absolute;
  left: 20%;
  bottom: 15%;
}
.rightBottom_side_container {
  position: absolute;
  right: 20%;
  bottom: 15%;
}
.rightTop_side_container {
  position: absolute;
  right: 20%;
  top: 25%;
}
.slider-content {
  position: relative;
  z-index: 15%;
}

.rightBottom_side_container,
.rightTop_side_container,
.leftBottom_side_container,
.leftTop_side_container {
  z-index: -1;
  position: absolute;
  height: 300px;
  width: 300px;
}

.single-image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.single-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media only screen and (max-width: 735px) {
  .custom-nav {
    display: none;
  }

  .single-image.active {
    opacity: 0.4;
    filter: grayscale(1);
  }
  .rightBottom_side_container,
  .rightTop_side_container,
  .leftBottom_side_container,
  .leftTop_side_container {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: auto;
    z-index: -1;
  }
  .single-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .mySwiper {
    margin: 0px auto;
    height: 80vh;
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 10px 20px;
  }
  .image-text-container {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: var(--font-size-title-mobile);
  }
  .slider-text-container {
    padding: 40px 0px;
    height: 100vh;
  }
  .slider-projects-container {
    padding-top: 0;
    padding-bottom: 0;
  }
  .rightBottom_side_container,
  .rightTop_side_container,
  .leftBottom_side_container,
  .leftTop_side_container {
    right: 0%;
    bottom: 0%;
    top: 0%;
    left: 0%;
  }
  .swiper-slide.swiper-slide-visible.swiper-slide-fully-visible {
    height: 4rem !important;
    margin-bottom: 0px !important;
  }
  .swiper-slide {
    font-size: 1.9rem;
  }
  .swiper-slide a {
    line-height: 1.8rem;
  }
  .pageLayout {
    height: 90vh;
  }
}
</style>
