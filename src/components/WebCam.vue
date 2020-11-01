<template>
  <div>
    Browser Based Webcam Demo<br /><br />
    <button id="select-files-button" class="btnWebcam">
      Capture Webcam Image
    </button>
    <!-- <div id="select-files-button-container" class="DashboardContainer"></div> -->
  </div>
</template>

<script>
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Webcam from "@uppy/webcam";

export default {
  name: "WebCam",
  data: () => ({
    uppy: null
  }),

  methods: {
    toggleSideBar() {
      console.log("toggleSideBar clicked");
    }
  },

  mounted() {
    this.uppy = new Uppy({ autoProceed: false })
      .use(Dashboard, {
        // target: ".DashboardContainer",
        // inline: true,
        trigger: "#select-files-button",
        // replaceTargetContent: true,
        // showSelectedFiles: false,
        maxHeight: 500,
        note: "Web cam images only.",
        plugins: ["Webcam"],
        proudlyDisplayPoweredByUppy: false
      })
      .use(Webcam, {
        target: Dashboard,
        // target: "#select-files-button-container",
        modes: ["picture"],
        mirror: false,
        showVideoSourceDropdown: true,
        videoConstraints: {
          width: { min: 720, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 800, max: 1080 }
        }
      });

    console.log("Webcam Created.");
    // console.log(this.uppy);
  }
};
</script>

<style></style>
