<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import BannerProject from "../components/bannerProject.vue";
import titleDescription from "../components/titleDescription.vue";
import Nav from "../components/nav.vue";
import BannerContact from "../components/bannerContact.vue";
import Footer from "../components/footer.vue";

/* const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
); */

const titlesDescriptions = [
  {
    title: "Customization",
    description:
      "Our customization service enhances vehicles with unique designs and advanced materials, tailored to client specifications for a distinctive, improved driving experience and enhancing aesthetics.",
  },
  {
    title: "Restomod",
    description:
      "Restomod blends classic design with modern technology, enhancing historic vehicles with custom details and upgrades for improved performance and comfort while preserving their vintage charm.",
  },
  {
    title: "service",
    description:
      "Our vehicle maintenance service keeps your car performing optimally through routine check-ups, fluid replacements, and diagnostics, improving its reliability and longevity.",
  },
  {
    title: "restoration",
    description:
      "Our auto restoration service revitalizes classic cars by combining  original features with modern enhancements, ensuring each vehicle is  authentically restored to its original condition for improved  performance and reliability.",
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
    <Nav
      class="nav-position"
      :class="[
        'backgroundYellow',
        isScrolled ? 'navbar-scrolled-yellow' : 'backgroundYellow',
      ]"
    ></Nav>
    <span class="BannerProject-container">
      <BannerProject></BannerProject>
    </span>
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
