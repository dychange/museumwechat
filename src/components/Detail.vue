<template>
  <div class="detail">
    <div class="detail-container">
      <div class="detail-title">
        <div>{{detailInfo.Name}}</div>
      </div>
      <div class="detail-img">
        <img v-lazy="detailInfo.Img">
      </div>
      <div class="detail-audio">
        <div class="audio">音频介绍</div>
        <audio :src="detailInfo.Audio" controls preload="auto"></audio>
      </div>
      <div class="detail-info">
        <h1 class="text">文字介绍</h1>
        <div>{{detailInfo.Content}}</div>
      </div>
    </div>
    <div class="location">
      <div style="font-weight:bold">您当前的位置:</div>
      <div class="address">{{position.address}}</div>
      <div class="lnglat">当前经纬度:({{position.lng}},{{position.lat}})</div>
      <div style="font-weight:bold">指定位置:</div>
      <div class="appoint">上海天文博物馆</div>
      <div class="lnglat">指定经纬度:(121.19311,31.09435)</div>
    </div>
    <div id="map-container"></div>
  </div>
</template>

<script>

export default {
  name: "Detail",
  props: {
    position: {
      type: Object
    },
    detailInfo: {
      type: Object
    }
  }
};
</script>

<style scoped>
.detail {
  padding: 0 0.3rem 0.2rem;
  background-color: #f0ffff;
}
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.4rem;
}
.detail-img {
  margin: 0.5rem 0 0.8rem 0;
}
.detail-img img {
  width: 100%;
  height: 6.5rem;
}
.detail-audio audio {
  width: 5rem;
  height: 1rem;
}
.detail-title {
  padding: 0.2rem;
  text-align: center;
  margin-top: 0.6rem;
  font-size: 0.4rem;
  overflow: hidden;
  word-break: break-all;
  font-weight: 550;
}
.detail-info {
  padding: 0.2rem;
  margin: 0.4rem 0;
  line-height: 0.5rem;
  font-size: 0.28rem;
  border-bottom: .02rem solid #C0C4CC;
}
.text,
.audio {
  text-align: center;
  margin-bottom: 0.36rem;
  font-weight: 550;
  font-size: 0.36rem;
}
.location {
  padding: 0.2rem;
}

.appoint,
.address,
.lnglat {
  font-size: 0.26rem;
  margin: 0.1rem 0;
  color: #ff6347;
}
</style>
