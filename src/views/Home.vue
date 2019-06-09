<template>
  <div class="home">
    <detail></detail>
    <detail-comment></detail-comment>
  </div>
</template>

<script>
import Detail from "../components/Detail";
import DetailComment from "../components/DetailComment";
export default {
  name: "home",
  components: {
    Detail,
    DetailComment
  }
};
</script>

<style scoped>

</style>
