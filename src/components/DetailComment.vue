<template>
  <div class="comment-container" ref="wrapper">
    <div class="content">
      <div class="comment-title">
        <div>留言</div>
        <div class="write-msg" @click="showWrite=!showWrite">写留言</div>
      </div>
      <div class="write" v-if="showWrite">
        <textarea class="write-comment" placeholder="你想说些什么呢?" maxlength="2000" v-model="commentWords"></textarea>
        <button @click="reportComment">发表</button>
      </div>
      <div class="comment-info" v-for="item in commentList" :key="item.id">
        <div class="comment-img">
          <img v-lazy="item.headImg">
        </div>
        <div class="comment-msg">
          <div class="author">{{item.nickName}}</div>
          <p class="msg">{{item.city}}</p>
        </div>
        <div class="good">
          <div>点赞:666</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      showWrite:false,
      commentWords:''
    };
  },
  methods: {
    reportComment(){
      console.log(this.commentWords)
    }
  },
  created() {},
  props: {
    commentList: {
      type: Array
    }
  }
};
</script>

<style scoped>
.comment-container {
  padding:0 0.4rem;
  background-color: #f5f5f5;
}
.content {
  padding: .4rem 0;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
}
.comment-info {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 0.8rem;
  background-color: #f5f5f5;
}
.comment-img img {
  width: 0.96rem;
  height: 0.96rem;
  margin-right: 0.2rem;
}
.author {
  margin-bottom: 0.2rem;
}
.good {
  position: absolute;
  right: 0;
  top: 0;
}
.msg {
  letter-spacing: 0.01rem;
}
.write-msg {
  color: #4169e1;
}
.write{
  width: 95%;
  height: 3rem;
}
.write-comment{
  width: 100%;
  height: 2.6rem;
  border-radius: .1rem;
  resize:none;
  padding: .2rem;
}
</style>
