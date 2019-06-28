<template>
  <div>
    <user @showContain='showContain'></user>
    <div class="container">
      <div class="detail">
        <div class="title">{{detailList.title}}</div>
        <div class="time">{{detailList.addTime}}</div>
        <div class="content">{{detailList.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNoticeDetail } from "../api/notice";
import { formatDate } from "../lib/formate";
import User from "../views/User";
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
  methods: {
    showContain() {
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
  },
  components: {
    User
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
  padding: 0.2rem;
  text-align: center;
  font-size: 0.4rem;
  overflow: hidden;
  word-break: break-all;
}
.time {
  font-size: 0.28rem;
  color: #ccc;
  margin: 0.2rem 0 0.4rem 0;
}
.content {
  padding: 0.2rem;
  line-height: 0.44rem;
  font-size: 0.3rem;
  overflow: hidden;
  word-break: break-all;
  text-align: left;
}
</style>
