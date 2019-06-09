<template>
  <div class="comment-container">
    <div class="comment-title">
      <div>留言</div>
      <router-link to='' class="write-msg">写留言</router-link>
    </div>
    <div class="comment-info">
      <div class="comment-img">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559833406716&di=3edcc729129bdd66f71d01d1afb998b0&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F7692%2Fa7691515_s.jpg"
        >
      </div>
      <div class="comment-msg">
        <div class="author">作者</div>
        <p
          class="msg"
        >这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息这是留言消息</p>
      </div>
      <div class="good">
        <div>点赞:666</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>

<style scoped>
.comment-container {
  margin-top: 0.8rem;
  margin-bottom: 0.6rem;
  padding: 0 0.4rem;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  margin: 0.4rem 0;
}
.comment-info {
  display: flex;
  flex-direction: row;
  position: relative;
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
.msg{
    letter-spacing: .01rem;
}
.write-msg {
    color: 	#4169E1;
}
</style>
