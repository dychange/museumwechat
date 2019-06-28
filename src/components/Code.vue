<template>
  <div class="container" v-lazy:background-image="backImg" :key="backImg">
    <div class="header">
      <img v-lazy="titleImg">
      <div class="title">上海天文博物馆</div>
    </div>
    <img class="code" v-lazy="codeImg" :key="codeImg">
    <div class="info">
      请长按二维码识别
      <br>关注公众号查看展品详细介绍
    </div>
    <div class="address">
      博物馆地址:上海市松江区西佘山顶
      <br>开放时间:周一到周六(8:00-18:00)
    </div>
  </div>
</template>

<script>
import { getCode } from "../api/code";

export default {
  name: "Code",
  data() {
    return {
      codeImg: "",
      backImg: require("../assets/imgs/code.jpg"),
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
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
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
.info {
  width: 4rem;
  text-align: center;
  margin: 6rem auto 0;
  font-size: 0.28rem;
}
.address {
  margin: 2rem auto 0;
  width: 4rem;
  text-align: center;
  font-size: 0.26rem;
}
</style>
