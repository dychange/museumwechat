<template>
  <div>
    <user></user>
    <div class="container">
      <div class="notice">公告</div>
      <div v-if="hasnotice">
        <routerLink
          tag="div"
          :to="/noticedetail/+item.id"
          class="notice-container"
          v-for="item in noticeList"
          :key="item.id"
        >
          <div class="header">
            <div class="danger" v-if="item.type===2?true:false">紧急通告</div>
            <div class="common" v-else>普通通告</div>
            <div class="title">{{item.title}}</div>
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
      userInfo: {
        img: "",
        nickName: ""
      }
    };
  },
  methods: {
    decodeUnicode(str) {
      str = str.replace(/\\/g, "%");
      return unescape(str);
    }
  },
  created() {
    let userInfo = this.$route.params.pathMatch;
    let list = userInfo.split("&");
    let info = [];
    for (let i = 0; i < list.length; i++) {
      info.push(list[i].substring(list[i].lastIndexOf("=") + 1));
    }
    this.userInfo.img = info[0];
    this.userInfo.nickName = this.decodeUnicode(info[1]);

    localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    getNotices().then(result => {
      if (result.data.status === 200) {
        this.noticeList = handleNotice(result);
        this.hasnotice = true;
      } else if (result.data.status === 0) {
        this.tips = result.data.msg;
      }
    });
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
}
.notice-container:active,
.notice-container:focus {
  background-color: #d3d3d3;
}
.notice {
  text-align: center;
  margin: 0.3rem 0;
  font-size: 0.36rem;
  font-weight: bold;
}
.header {
  overflow: hidden;
  word-break: break-all;
}
.title {
  font-size: 0.28rem;
  margin: 0.28rem 0;
  padding: 0 0.2rem;
  text-align: center;
}

.time {
  margin-left: auto;
  font-size: 0.24rem;
  color: #ccc;
  padding: 0.2rem;
}
.danger {
  color: #d81e06;
}
.common,
.danger {
  font-size: 0.28rem;
  margin: 0.2rem;
  padding-bottom: 0.1rem;
  text-align: center;
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
