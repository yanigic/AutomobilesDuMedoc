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
  { src: cardImageFive, name: "nome progetto" },
  { src: cardImageThree, name: "nome progetto" },
  { src: cardImageOne, name: "nome progetto" },
];

const imagesTwo = [
  { src: cardImage, name: "nome progetto" },
  { src: cardImageSeven, name: "nome progetto" },
  { src: cardImageSixe, name: "nome progetto" },
  { src: cardImageNine, name: "nome progetto" },
];

const imagesThree = [
  { src: cardImageEight, name: "nome progetto" },
  { src: cardImageFor, name: "nome progetto" },
  { src: cardImageTwo, name: "nome progetto" },
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
