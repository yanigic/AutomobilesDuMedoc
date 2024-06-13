<template>
  <div class="box-video">
    <div class="container-img-animated">
      <img
        v-if="!showVideo"
        src="../assets/img/IntroADM_Desktop_FrameFnale.png"
        alt=""
      />
      <video v-else ref="videoElement" muted>
        <source src="../assets/video/IntroADM_Desktop.mp4" type="video/mp4" />
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
      this.$refs.videoElement.play();
    });
  },
};
</script>

<style scoped></style>
