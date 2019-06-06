<template>
  <div class="home">
    <detail></detail>
    <comment></comment>
  </div>
</template>

<script>
import Detail from "../components/Detail";
import Comment from "../components/Comment";
export default {
  name: "home",
  components: {
    Detail,
    Comment
  }
};
</script>

<style scoped>
.home{
  padding: 0 .4rem;
}
</style>
