<template>
  <div class="container">
    <div class="detail">
      <div class="title">{{detailList.title}}</div>
      <div class="time">{{detailList.addTime}}</div>
      <div class="content">{{detailList.content}}</div>
    </div>
  </div>
</template>

<script>
import { getNoticeDetail } from "../api/notice";
import { formatDate } from "../lib/formate";
export default {
  name: "NoticeDetail",
  data() {
    return {
      detailList: {
        id: null,
        title: "",
        content: "",
        addTime: null
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    getNoticeDetail({ id }).then(result => {
      if (result.data.status === 200) {
        result.data.info.addTime = formatDate(result.data.info.addTime);
        let list = result.data.info;
        this.detailList = {
          id: list.id,
          title: list.title,
          content: list.content,
          addTime: list.addTime
        };
      }
    });
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.4rem;
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
}
.title {
    text-align: center;
  width: 5rem;
  font-size: 0.36rem;
  overflow: hidden;
  word-break: break-all;
}
.time {
  font-size: 0.28rem;
  color: #ccc;
  margin: 0.2rem 0 0.4rem 0;
}
.content {
  line-height: 0.44rem;
  font-size: 0.32rem;
  overflow: hidden;
  word-break: break-all;
  text-align: left;
}
</style>
