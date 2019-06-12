<template>
  <div class="container">
    <div v-if='hasnotice'>
    <routerLink tag='div' :to="/notice/+item.id" class="notice-container" v-for="item in noticeList" :key="item.id" >
      <div class="header">
        <div class="danger" v-if="item.type===2?true:false">[紧急通告:]</div>
        <div class="common" v-else>[普通通告:]</div>
        <div class="title">{{item.title}}</div>
      </div>
      <div class="time">{{item.addTime}}</div>
      </routerLink>
      </div>
    <div class="nonotice" v-else>{{tips}}</div>  
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
      noticeList: [],
      hasnotice:false,
      tips:''
    };
  },
  methods: {
  },
  created() {
    getNotices().then(result => {
      if (result.data.status === 200) {
        this.noticeList = handleNotice(result);
        this.hasnotice=true
      }else if(result.data.status === 0){
          this.tips=result.data.msg
      }
    });
  }
};
</script>

<style scoped>

.notice-container {
  width: 94%;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.02rem solid #ccc;
  padding: 0.2rem;
  background-color: #fff;
}
.header {
  overflow: hidden;
  word-break: break-all;
}
.title {
  font-size: 0.28rem;
  margin: .28rem 0;
}

.time {
  margin-left: auto;
  font-size: .24rem;
  color: #ccc;
}
.danger {
  color: #d81e06;
  font-size: 0.28rem;
  margin-bottom: .04rem;
}
.common{
  font-size: 0.28rem;
  margin-bottom: .04rem;
}
.nonotice{
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2rem;
  margin-top: -2rem;
  text-align: center;
  font-size: .5rem;
}
</style>
