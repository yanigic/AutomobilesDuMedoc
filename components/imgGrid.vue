<script setup lang="ts">
import "../assets/css/imgGrid.css";
import cardImage from "../assets/img/card.jpg";

const images = [
  { src: cardImage, name: "nome progetto" },
  { src: cardImage, name: "nome progetto" },
  { src: cardImage, name: "nome progetto" },
  { src: cardImage, name: "nome progetto" },
  { src: cardImage, name: "nome progetto" },
  { src: cardImage, name: "nome progetto" },
];
</script>

<template>
  <div>
    <div class="row-imgGrid">
      <div class="column-imgGrid">
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
      </div>

      <div class="column-imgGrid">
        <img src="../assets/img/image2.jpg" style="width: 100%" />
        <img src="../assets/img/image3.jpg" style="width: 100%" />
        <img src="../assets/img/card.jpg" style="width: 100%" />
        <img src="../assets/img/image4.jpg" style="width: 100%" />
        <img src="../assets/img/image2.jpg" style="width: 100%" />
        <img src="../assets/img/image2.jpg" style="width: 100%" />
        <img src="../assets/img/card.jpg" style="width: 100%" />

        <img src="../assets/img/image4.jpg" style="width: 100%" />
      </div>
      <div class="column-imgGrid">
        <div
          class="container-imgGrid"
          v-for="(item, index) in images"
          :key="index"
        >
          <img class="image" :src="item.src" style="width: 100%" />
          <div class="middle">
            <div class="name-project">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
