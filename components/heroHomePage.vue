<template>
  <div class="box-video">
    <div class="container-img-animated container-img-animated-mobile">
      <img
        v-if="!showVideo"
        src="@/assets/img/IntroADM_Mobile_FrameFnale.png"
        alt=""
      />
      <video v-else ref="mobileVideo" muted autoplay playsinline>
        <source src="@/assets/video/IntroADMMobile.mp4" type="video/mp4" />
        Il tuo browser non supporta l'elemento video.
      </video>
    </div>

    <div class="container-img-animated container-img-animated-desktop">
      <img
        v-if="!showVideo"
        src="@/assets/img/IntroADM_Desktop_FrameFnale.png"
        alt=""
      />
      <video v-else ref="desktopVideo" muted autoplay playsinline>
        <source src="@/assets/video/IntroADM_Desktop.mp4" type="video/mp4" />
        Il tuo browser non supporta l'elemento video.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  mounted() {
    this.showVideo = true;
    this.$nextTick(() => {
      const mobileVideo = this.$refs.mobileVideo;
      const desktopVideo = this.$refs.desktopVideo;

      if (mobileVideo) {
        mobileVideo.play().catch((error) => {
          console.error("Error playing mobile video:", error);
        });
      }

      if (desktopVideo) {
        desktopVideo.play().catch((error) => {
          console.error("Error playing desktop video:", error);
        });
      }
    });
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
  .container-img-animated.container-img-animated-desktop,
  .container-img-animated.container-img-animated-desktop[data-v-913b6db6] {
    height: 70vh;
  }
}
.container-img-animated.container-img-animated-desktop {
  height: 90vh;
}
.container-img-animated-mobile {
  display: none;
}
.container-img-animated-desktop video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  .container-img-animated-mobile {
    height: 90vh;
    display: block;
  }

  .container-img-animated-mobile img,
  .container-img-animated-mobile video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container-img-animated-desktop {
    display: none;
  }
}
</style>
