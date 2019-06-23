<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getUserInfoMessage } from "./utils/localStorage";
import { location } from "./lib/location";
export default {
  mounted() {
    let screenWidth = document.documentElement.clientWidth;
    let html = document.querySelector("html");
    html.style.fontSize = (screenWidth / 750) * 100 + "px";
    let geolocation = location.initMap("map-container"); //定位
    AMap.event.addListener(geolocation, "complete", result => {});
    AMap.event.addListener(geolocation, "error", onError => {});
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
