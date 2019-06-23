<template>
  <div>
    <user></user>
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
    this.userInfo.nickName =this.decodeUnicode(info[1]) ;
    localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    getLostInfo().then(result => {
      if (result.data.status === 200) {
        this.lostList = handleLost(result);
        this.haslost = true;
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
  padding: 0 0.4rem;
}
.title {
  text-align: center;
  margin-top: 0.4rem;
  font-size: 0.36rem;
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
