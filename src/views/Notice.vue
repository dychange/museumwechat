<template>
  <div class="container">
    <div class="notice-container" v-for="item in noticeList" :key="item.id">
      <div class="header">
        <div class="title-type" v-if="item.type===2?true:false">紧急通知:</div>
        <span class="title">{{item.title}}</span>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="time">{{item.addTime}}</div>
    </div>
  </div>
</template>

<script>
import { getNotices } from "../api/notice";
import { formatDate } from "../lib/formate";
import { handleNotice } from "../lib/handleData";
export default {
  name: "Notice",
  data() {
    return {
      noticeList: []
    };
  },
  created() {
    getNotices().then(result => {
      if (result.data.status === 200) {
        this.noticeList = handleNotice(result);
      }
    });
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.4rem;
}
.notice-container {
  width: 89.3%;
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  border: 0.02rem solid #ccc;
  padding: 0.2rem;
  border-radius: 0.1rem;
  box-shadow: 0 0.06rem 0.06rem -0.02rem #ccc, 0.06rem 0 0.06rem -0.02rem #ccc;
  background-color: #fff;
}
.header {
  overflow: hidden;
  word-break: break-all;
}
.title {
  overflow: hidden;
  font-size: 0.36rem;
  font-weight: 600;
}
.content {
  padding: 0.3rem 0;
  font-size: 0.3rem;
  overflow: hidden;
  word-break: break-all;
}
.time {
  margin-left: auto;
}
.title-type {
  color: #d81e06;
  font-size: 0.36rem;
}
</style>
