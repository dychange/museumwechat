<template>
  <div class="container">
    <div class="title">失物招领</div>
    <div v-if="haslost">
      <div class="lost-container" v-for="item in lostList" :key="item.id">
        <div class="lostname">名称：{{item.articleName}}</div>
        <div class="content">说明：{{item.remark}}</div>
        <div class="place">丢失地点：{{item.lostPlace}}</div>
        <div class="time">丢失时间：{{item.lostTime}}</div>
      </div>
    </div>
    <div class="nolost" v-else>{{tips}}</div>
  </div>
</template>

<script>
import { getLostInfo } from "../api/notice";
import { handleLost } from "../lib/handleData";
export default {
  name: "LostAndFound",
  data() {
    return {
      lostList: [],
      haslost: false,
      tips:''
    };
  },
  created() {
    getLostInfo().then(result => {
      if (result.data.status === 200) {
        this.lostList = handleLost(result);
        this.haslost=true
      }else if(result.data.status === 0){
        this.tips=result.data.msg
      }
    });
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.4rem;
}
.title{
  text-align: center;
  margin-top: .4rem;
  font-size: .36rem;
  font-weight: bold;
}
.lost-container {
  width: 95%;
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  border: 0.02rem solid #ccc;
  padding: 0.2rem;
  border-radius: 0.1rem;
  box-shadow: 0 0.06rem 0.06rem -0.02rem #000, 0.06rem 0 0.06rem -0.02rem #000;
  background-color: #fff;
}
.content {
  padding: 0.3rem 0;
  font-size: 0.3rem;
  overflow: hidden;
  word-break: break-all;
}

.place {
  padding: 0.1rem 0 0.3rem 0;
  overflow: hidden;
  word-break: break-all;
}
.nolost {
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2rem;
  margin-top: -2rem;
  text-align: center;
  font-size: 0.5rem;
}
</style>
