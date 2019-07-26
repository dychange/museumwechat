<template>
  <div >
    <user @showContain="showContain"></user>
    <div class="container">
      <div class="notice">公告</div>
      <div v-if="hasnotice">
        <routerLink
          tag="div"
          :to="'/museumwx/noticedetail-'+item.id"
          class="notice-container"
          v-for="item in noticeList"
          :key="item.id"
        >
          <div class="header">
            <div class="danger" v-if="item.type===2?true:false">【紧急公告】</div>
            <div class="common" v-else>【普通公告】</div>
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
          </div>
          <div class="time">{{item.addTime}}</div>
        </routerLink>
      </div>
      <div class="nonotice" v-else>{{tips}}</div>
    </div>
  </div>
</template>

<script>
import { getNotices } from "../api/notice";
import { formatDate } from "../lib/formate";
import { handleNotice } from "../lib/handleData";
import User from "./User";
export default {
  name: "Notice",
  data() {
    return {
      noticeList: [],
      hasnotice: false,
      tips: "",
    };
  },
  methods: {
    showContain() {
      getNotices().then(result => {
        if (result.data.status === 200) {
          this.noticeList = handleNotice(result);
          this.hasnotice = true;
        } else if (result.data.status === 0) {
          this.tips = result.data.msg;
          this.hasnotice=false
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
  padding: 0 0.2rem;
}
.notice-container {
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  border: 0.02rem solid #f8f8ff;
  border-radius: 0.1rem;
  background-color: #f8f8ff;
  line-height: .6rem;
}
.notice-container:active,
.notice-container:focus {
  background-color: #e4e7ed;
}
.notice {
  text-align: center;
  margin: 0.3rem 0;
  font-size: 0.4rem;
  font-weight: 550;
}
.header {
  overflow: hidden;
  word-break: break-all;
}
.title {
  font-size: 0.3rem;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6rem;
}
.content {
  padding: 0 0.2rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #909399;
}
.time {
  margin-left: auto;
  font-size: 0.24rem;
  color: #ccc;
  padding-right: 0.2rem;
}
.danger {
  color: #d81e06;
}
.common,
.danger {
  font-size: 0.3rem;
  margin:0.1rem 0.2rem ;
  border-bottom: 0.02rem solid #ccc;
}
.nonotice {
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
