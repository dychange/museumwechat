<template>
  <div >
    <user @showContain='showContain'></user>
    <div class="container" >
      <div class="title">失物招领</div>
      <div v-if="haslost">
        <div class="lost-container" v-for="item in lostList" :key="item.id">
          <div class="lostname">名称：{{item.articleName}}</div>
          <div class="content">说明：{{item.remark}}</div>
          <div class="place">丢失地点：{{item.lostPlace}}</div>
          <div class="time">丢失日期：{{item.lostTime}}</div>
        </div>
      </div>
      <div class="nolost" v-else>{{tips}}</div>
    </div>
  </div>
</template>

<script>
import { getLostInfo } from "../api/notice";
import { handleLost } from "../lib/handleData";
import User from "./User";
export default {
  name: "LostAndFound",
  data() {
    return {
      lostList: [],
      haslost: false,
      tips: "",
    };
  },
  methods:{
    showContain(){
       getLostInfo().then(result => {
      if (result.data.status === 200) {
        this.lostList = handleLost(result);
        this.haslost = true;
      } else if (result.data.status === 0) {
        this.tips = result.data.msg;
      }
    });
    }
  },
  components: {
    User
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.3rem;
}
.title {
  text-align: center;
  margin-top: 0.4rem;
  font-size: 0.4rem;
  font-weight: 550;
}
.lost-container {
  box-sizing: border-box;
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  border: 0.02rem solid #ccc;
  padding: 0.2rem;
  border-radius: 0.1rem;
  background-color: #fff;
  font-size: .28rem;
  line-height: .4rem;
}
.content {
  padding: 0.1rem 0;
  overflow: hidden;
  word-break: break-all;
}

.place {
  padding-bottom: .1rem;
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
