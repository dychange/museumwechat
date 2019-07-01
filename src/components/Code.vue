<template>
  <div class="container" >
    <div class="header">
      <img v-lazy="titleImg">
      <div class="title">上海天文博物馆</div>
    </div>
    <img class="code" :src="codeImg" >
  </div>
</template>

<script>
import { getCode } from "../api/code";
export default {
  name: "Code",
  data() {
    return {
      codeImg: "",
      backImg: require("../assets/imgs/code.png"),
      titleImg: require("../assets/imgs/title.png")
    };
  },
    created() {
      let id =this.$route.params.id
      getCode({id}).then((result) => {
        if(result.data.status===200){
            this.codeImg=result.data.info
        }
      })
    },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background: url('../assets/imgs/code.png') no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.code {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2rem;
  margin-left: -1.5rem;
}
.header {
  padding-top: 0.5rem;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
}
.header img {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.title {
  font-size: 0.4rem;
  letter-spacing: 0.04rem;
  font-weight: bold;
}
</style>
