<script setup lang="ts">
import "../assets/css/imgGrid.css";
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

const images = [
  { src: cardImageFive, name: "volvo Plateau" },
  { src: cardImageThree, name: "retrowave aim" },
  { src: cardImageOne, name: "another vision of lacoste" },
];

const imagesTwo = [
  { src: cardImage, name: "defender amaranth" },
  { src: cardImageSeven, name: "ultra pantera" },
  { src: cardImageSixe, name: "turbo 5" },
  { src: cardImageNine, name: "226 Pantera" },
];

const imagesThree = [
  { src: cardImageEight, name: "cherry countach" },
  { src: cardImageFor, name: "honda twincam" },
  { src: cardImageTwo, name: "in the middle of the night, 911" },
];
</script>

<template>
  <div>
    <div class="row-imgGrid">
      <div class="column-imgGrid">
        <a href="singleProject">
          <div
            class="container-imgGrid"
            v-for="(item, index) in images"
            :key="index"
          >
            <img class="image" :src="item.src" style="width: 100%" />
            <div class="middle">
              <!-- <div>
              <div>{{ item.name }}</div>
            </div> -->
              <div class="name-project">
                <div class="box-nameProject">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="column-imgGrid">
        <a href="singleProject">
          <div
            class="container-imgGrid"
            v-for="(item, index) in imagesTwo"
            :key="index"
          >
            <img class="image" :src="item.src" style="width: 100%" />
            <div class="middle">
              <!-- <div>
              <div>{{ item.name }}</div>
            </div> -->
              <div class="name-project">
                <div class="box-nameProject">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="column-imgGrid">
        <a href="singleProject">
          <div
            class="container-imgGrid"
            v-for="(item, index) in imagesThree"
            :key="index"
          >
            <img class="image" :src="item.src" style="width: 100%" />
            <div class="middle">
              <!-- <div>
              <div>{{ item.name }}</div>
            </div> -->
              <div class="name-project">
                <div class="box-nameProject">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
