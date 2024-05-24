<script setup >
import "../assets/css/imgTwoColumns.css";
const props = defineProps({
  img: String,
});

const imgsProject=[{imgTwoColumsOne:imgTwoColumsOne,imgTwoColumsTwo:imgTwoColumsTwo,imgTwoColumsThree:imgTwoColumsThree}]


import imgTwoColumsOne from "/Users/yanilettetejeda/Documents/Code/projects/adm/assets/img/imgone.jpg";
import imgTwoColumsTwo from "../../assets/img/imagetwo.jpg";
import imgTwoColumsThree from "../../assets/img/imagethree.jpg"; 
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

function handleMouseUp() {
 isDragging.value = false;
}


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
onMounted(() => {
  carousel.value = document.getElementById("carousel-imgTwoColumns"); // Assumi che `#carousel` sia l'ID del div da scrollare
  carousel.value.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  carousel.value.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
});
</script>

<template>
  <div>
      <div id="carousel-imgTwoColumns" class="carousel-imgTwoColumns"  v-for="imgProject in imgsProject">
        <div class="square"><img :src="imgProject.imgTwoColumsOne" alt=""></div>
        <div class="square"><img :src="imgProject.imgTwoColumsTwo" alt=""></div>
        <div class="square"><img :src="imgProject.imgTwoColumsThree" alt=""></div>
        
      </div>
 
      <div class="container-imgTwoColumns" v-for="imgProject in imgsProject"  >
        <div class="main-imgTwoColumns">
          <img class="img-col" :src="imgProject.imgTwoColumsOne" alt=""  />
        </div>

        <div class="sidebar-imgTwoColumns">
          <div>
            <img class="img-col" :src="imgProject.imgTwoColumsTwo" alt=""  />
          </div>
          <div>
            <img class="img-col" :src="imgProject.imgTwoColumsThree" alt=""  />
          </div>
        </div>
      </div>
  </div>
</template>
