<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    let screenWidth = document.documentElement.clientWidth;
    let html = document.querySelector("html");
    html.style.fontSize = (screenWidth / 750) * 100 + "px";
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
.weui-toptips {
  padding: 0.1rem !important;
  font-size: 0.28rem !important;
}
</style>
