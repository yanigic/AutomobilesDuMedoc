<script lang="ts" setup>
import Nav from "../components/nav.vue";
import Footer from "../components/footer.vue";
</script>
<template>
  <div>
    <Nav class="nav-position"></Nav>
    <slot />

    <Footer></Footer>
  </div>
</template>
