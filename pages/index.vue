<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerProject from "../components/bannerProject.vue";
import titleDescription from "../components/titleDescription.vue";
import Nav from "../components/nav.vue";
import BannerContact from "../components/bannerContact.vue";
import Footer from "../components/footer.vue";
import HeroHomePage from "../components/heroHomePage.vue";
import NavMobile from "../components/navMobile.vue";

/* const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
); */

const titlesDescriptions = [
  {
    title: "Projects",
    description:
      "The customization projects enhances vehicles with unique designs and advanced materials, tailored to client specifications for a distinctive, improved driving experience and enhancing aesthetics.",
  },
  {
    title: "Showroom",
    description:
      "Automobiles du Médoc showroom features a curated selection of luxury and collector cars, each with detailed information on its history and specifications. Every customer can find and acquire a vehicle that exceeds their expectations.",
  },
  {
    title: "Conciergerie",
    description:
      "Our concierge service offers secure storage solutions, where every vehicle is maintained under the highest standards of care and surveillance. We ensure that each car remains in pristine condition, safeguarded by advanced security measures.",
  },
];

const ctaContent = [
  {
    paragraph: `Discover <br> all the possibilities for your car`,
    cta: "CONTACT US",
  },
];

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
  console.log("isScrolled:", isScrolled.value); // Aggiungi questo per verificare lo scroll
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="container-layouts">
    <NavMobile class="navMobile-yellow"></NavMobile>
    <Nav
      class="nav-position"
      :class="[
        'backgroundYellow',
        isScrolled ? 'navbar-scrolled-yellow' : 'backgroundYellow',
      ]"
    ></Nav>
    <HeroHomePage></HeroHomePage>
    <span class="BannerProject-container">
      <BannerProject></BannerProject>
    </span>
    <div class="container-titleDescription">
      <span
        class="homepage"
        v-for="(item, index) in titlesDescriptions"
        :key="index"
      >
        <titleDescription
          :title="item.title"
          :description="item.description"
        ></titleDescription>
      </span>
    </div>
    <BannerContact
      class="container-banner-home"
      v-for="(text, index) in ctaContent"
      :key="index"
      :paragraph="text.paragraph"
      :cta="text.cta"
    ></BannerContact>
    <Footer></Footer>
  </div>
</template>
