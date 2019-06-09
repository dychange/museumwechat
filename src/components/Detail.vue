<template>
  <div class="detail-container">
   <div class="detail-img">
       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559833406716&di=3edcc729129bdd66f71d01d1afb998b0&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F7692%2Fa7691515_s.jpg" >
   </div>
   <div class="detail-audio">
       <audio src="http://isure.stream.qqmusic.qq.com/C400004QZMUo026HhX.m4a?guid=8890570360&vkey=1648BB216669D48BD57A78A8765F372332D76544F2F13AAE4FC3B4B747D59DB4CB05BAE0FB1FCC62F58DD938722D968ED360173859FE52F9&uin=0&fromtag=66" controls></audio>
   </div>
   <div class="detail-title">
       <h1>这是标题</h1>
   </div>
   <div class="detail-info">
       <p>这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息这是详情信息</p>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
 
}
</script>

<style scoped>
.detail-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: .4rem;
    background-color: #fff;
    padding: 0 .4rem;
}
.detail-img{
    margin: .8rem 0;
}
.detail-img img{
    width: 6rem;
    height: 5rem;
}
.detail-audio audio{
    width: 5rem;
    height: 1rem;
    background-color: #fff;
}
.detail-title{
    margin: .8rem 0 .4rem 0;
    font-size: .36rem;
}
.detail-info{
    width: 6.4rem;
    letter-spacing: .04rem;
    margin-bottom: .8rem;
}
</style>
