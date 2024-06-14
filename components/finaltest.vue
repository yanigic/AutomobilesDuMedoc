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

    <div class="slider-content">
      <div class="leftTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentVisibleIndex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            v-show="index % 4 === 0"
            :src="item.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>
      <div class="leftBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentVisibleIndex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            v-show="(index - 1) % 4 === 0"
            :src="item.src"
            :alt="'indice ' + index"
          />
          <div class="image-text-container"></div>
        </div>
      </div>

      <div class="rightTop_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentVisibleIndex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            v-show="(index - 2) % 4 === 0"
            :src="item.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>
      <div class="rightBottom_side_container">
        <div
          class="single-image"
          :class="{ active: index === currentVisibleIndex }"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            v-show="(index - 3) % 4 === 0"
            :src="item.src"
            :alt="'indice ' + (index + 1)"
          />
          <div class="image-text-container"></div>
        </div>
      </div>

      <div class="slider-text-container">
        <ul id="infinite-list" @scroll="onScroll">
          <li
            class="li image-text-container"
            v-for="(item, index) in items"
            :key="index"
            :class="{ visible: index === currentVisibleIndex }"
          >
            <a :href="item.href"> {{ item.name }} </a>
          </li>
        </ul>
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

<script>
import { ref, onMounted } from "vue";
import cheryCountach from "../assets/img/Cherry_Countach.jpeg";
import Superleggera from "../assets/img/4C_Superleggera.jpeg";
import BenzV12 from "../assets/img/Benz_V12.jpeg";
import defender from "../assets/img/Defender_Amaranth.jpeg";
import BMWM3E46 from "../assets/img/BMW_M3_E46.jpeg";

export default {
  name: "App",
  setup() {
    const originalItems = [
      { name: "4c Superleggera", src: Superleggera, href: "singleProject" },
      { name: "benz v12", src: BenzV12, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
      { name: "bmw m3 e46", src: BMWM3E46, href: "singleProject" },
      { name: "cherry countach", src: cheryCountach, href: "singleProject" },
      { name: "defender amaranth", src: defender, href: "singleProject" },
    ];

    const items = ref([...originalItems]);
    const currentVisibleIndex = ref(0);

    // Function to load more items by repeating the existing items
    const loadMore = () => {
      items.value = items.value.concat(originalItems);
    };

    const onScroll = (event) => {
      const listElm = event.target;
      const listRect = listElm.getBoundingClientRect();

      let visibleIndex = null;

      items.value.forEach((_, index) => {
        const item = listElm.children[index];
        if (item) {
          const itemRect = item.getBoundingClientRect();
          if (itemRect.top <= listRect.top && itemRect.bottom > listRect.top) {
            visibleIndex = index;
            return; // Exit forEach when the first visible item is found
          }
        }
      });

      if (visibleIndex !== null) {
        currentVisibleIndex.value = visibleIndex;
      }

      if (
        listElm.scrollHeight - listElm.clientHeight <=
        listElm.scrollTop + 1
      ) {
        // Scrolled to the bottom, load more items
        loadMore();
      }
    };

    // Function to scroll to the current visible index
    const scrollToCurrentIndex = () => {
      const listElm = document.getElementById("infinite-list");
      if (listElm) {
        const targetItem = listElm.children[currentVisibleIndex.value];
        if (targetItem) {
          listElm.scrollTo({
            top: targetItem.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Function to advance or go back one slide
    const plusSlides = (n) => {
      currentVisibleIndex.value =
        (currentVisibleIndex.value + n + items.value.length) %
        items.value.length;
      scrollToCurrentIndex();
    };

    // Initial load of items
    onMounted(() => {
      loadMore();
    });

    return {
      items,
      onScroll,
      currentVisibleIndex,
      plusSlides,
    };
  },
};
</script>

<style>
#infinite-list {
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  margin: 20px auto;
  padding: 0;
  list-style-type: none;
  scroll-behavior: smooth;
}

.li {
  color: var(--ADM-Grey, #7c809b);
  text-align: center;
  font-family: var(--Superclarendon);
  font-size: var(--font-size-text-one);
  font-style: normal;
  font-weight: 300;
  line-height: 4rem;
  letter-spacing: -0.05625rem;
  text-transform: uppercase;
}
.prev-btn,
.next-btn {
  margin: auto;
  display: flex;
}
.visible {
  color: var(--ADM-Yellow, #f3f90a);
  text-align: center;
  font-family: var(--Superclarendon);
  font-size: var(--font-size-text-one);
  font-style: normal;
  font-weight: 300;
  line-height: 4rem;
  letter-spacing: -0.05625rem;
  text-transform: uppercase;
}

.leftTop_side_container {
  position: absolute;
  left: 15%;
  top: 0;
}
.leftBottom_side_container {
  position: absolute;
  left: 15%;
  bottom: 0;
}
.rightBottom_side_container {
  position: absolute;
  right: 15%;
  bottom: 0;
}
.rightTop_side_container {
  position: absolute;
  right: 15%;
  top: 0;
}
.slider-content {
  position: relative;
  z-index: 0;
}

.rightBottom_side_container,
.rightTop_side_container,
.leftBottom_side_container,
.leftTop_side_container {
  /* margin: auto; */
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
.active.single-image {
  opacity: 1;
}
.single-image.active {
  opacity: 1;
}
@media only screen and (max-width: 735px) {
  .slider-projects-container .prev-btn,
  .slider-projects-container .next-btn {
    display: none;
  }

  .single-image.active {
    opacity: 0.5;
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
  #infinite-list {
    margin: 0px auto;
    height: 100vh;
    overflow: scroll;
    padding: 10px 20px;
  }
  .image-text-container {
    padding-top: 5px;
    font-size: var(--font-size-title-mobile);
  }
  .slider-text-container {
    padding: 50px 0px;
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
}
</style>
