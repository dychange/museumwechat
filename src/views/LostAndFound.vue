<template>
  <div class="container">
    <div class="lost-container" v-for="item in lostList" :key="item.id">
      <div class="lostname">名称：{{item.articleName}}</div>
      <div class="content">说明：{{item.remark}}</div>
      <div class="place">丢失地点：{{item.lostPlace}}</div>
      <div class="time">丢失时间：{{item.lostTime}}</div>
    </div>
  </div>
</template>

<script>
import {getLostInfo} from '../api/notice'
import {handleLost} from '../lib/handleData'
export default {
  name: "LostAndFound",
  data() {
      return {
          lostList:[]
      }
  },
  created() {
      getLostInfo().then((result) => {
        if(result.data.status===200){
            this.lostList=handleLost(result)
            console.log(result)
        }  
      })
  },
};
</script>

<style scoped>
.container {
  padding: 0 0.4rem;
}
.lost-container {
  width: 95%;
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  border: 0.02rem solid #ccc;
  padding: 0.2rem;
  border-radius: 0.1rem;
  box-shadow: 0 0.06rem 0.06rem -0.02rem #ccc, 0.06rem 0 0.06rem -0.02rem #ccc;
  background-color: #fff;
}
.content {
  padding: 0.3rem 0;
  font-size: 0.3rem;
  overflow: hidden;
  word-break: break-all;
}

.place {
  padding:.1rem 0 .3rem 0;
  overflow: hidden;
  word-break: break-all;
}
</style>
