<template>
  <v-container>
    <v-row align="center" justify="space-around" class="mt-10">
      <v-btn id="select-files-button" class="btnWebcam" color="#FF6600">
        Capture Webcam Image
        <v-icon right dark>
          mdi-camera
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Webcam from "@uppy/webcam";
// import XHRUpload from "@uppy/xhr-upload";

export default {
  name: "WebCam",
  data: () => ({
    uppy: null
  }),

  mounted() {
    this.uppy = new Uppy({ autoProceed: false })
      .use(Dashboard, {
        // target: ".DashboardContainer",
        // inline: true,
        trigger: "#select-files-button",
        // replaceTargetContent: true,
        // showSelectedFiles: false,
        maxHeight: 500,
        note: "Select camera to test web cam.",
        plugins: ["Webcam"],
        proudlyDisplayPoweredByUppy: false,
        hideUploadButton: true
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
    // .use(XHRUpload, {
    //   endpoint: "http://localhost:7071/api/file-upload",
    // });
  }
};
</script>

<style></style>
