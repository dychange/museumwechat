<template>
  <div class="detail">
    <div class="detail-container">
      <div class="detail-title">
        <div>展品名称</div>
      </div>
      <div class="detail-img">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559833406716&di=3edcc729129bdd66f71d01d1afb998b0&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fsjbbs%2F7692%2Fa7691515_s.jpg"
        >
      </div>
      <div class="detail-audio">
        <div class="audio">音频介绍</div>
        <audio
          src="http://isure.stream.qqmusic.qq.com/C400004QZMUo026HhX.m4a?guid=8890570360&vkey=1648BB216669D48BD57A78A8765F372332D76544F2F13AAE4FC3B4B747D59DB4CB05BAE0FB1FCC62F58DD938722D968ED360173859FE52F9&uin=0&fromtag=66"
          controls
        ></audio>
      </div>
      <div class="detail-info">
        <h1 class="text">文字介绍</h1>
        <div>在十二月的太阳落下之前，穿越闹市街区，跨过农村乡镇。12月的报馆乍暖还寒，日落的景象非常壮观。透过一片橙红色的云霞，夕阳从朦胧的山岭和江面边际，沉重地抬起肩头，又沉重的陨落下去。随着它的沉没，黑夜的爬了出来，光明和温暖，一丝丝一缕缕的飘散沉入了大地，沉入了山峦，沉入了江长的身影接二连三地隐蔽起来。树林也层层叠叠的消失，就像陈顺序的山岚的棉被软绵绵。并但是午后阳光甜暖的回忆，冬天苍老的手已经抚摸到这些山林，他们的叶子已经转业抹上了声黄，墨绿和丹红。看了仿佛是对周日杨首相中他们对木质所做出的一切送别，像是在奉献给一位墓年老人更像是在奉献给一位长辈</div>
      </div>
    </div>
    <div class="location">
      <div class="youraddress">您当前的位置:</div>
      <div class="address">{{address}}</div>
    </div>
    <div id="map-container"></div>
  </div>
</template>

<script>
import {location} from '../lib/location'
export default {
  name: "Detail",
  data() {
    return {
      address: "定位中..."
    };
  },
  methods: {
     getLocation() {
      let that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        console.log(result)
        that.address=result.formattedAddress
      });
      AMap.event.addListener(geolocation, 'error', onError =>{
        console.log(onError)
      })
    },
  },
  mounted() {
    setTimeout(() => {
    this.getLocation()        
    }, 50);
  }
};
</script>

<style scoped>
.detail {
  padding: 0 0.4rem 0.2rem;
  background-color: #fff;
}
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.4rem;
}
.detail-img {
  margin: 0.8rem 0;
}
.detail-img img {
  width: 6rem;
  height: 5rem;
}
.detail-audio audio {
  width: 5rem;
  height: 1rem;
  background-color: #fff;
}
.detail-title {
  width: 5.6rem;
  text-align: center;
  margin: 0.8rem 0 0 0;
  font-size: 0.36rem;
  overflow: hidden;
  word-break: break-all;
  font-weight: bold;
}
.detail-info {
  width: 6.4rem;
  margin: 0.8rem 0;
  line-height: 0.5rem;
}
.text,
.audio {
  text-align: center;
  margin-bottom: 0.36rem;
  font-weight: bold;
  font-size: 0.36rem;
}
.location {
  padding-left: 0.19rem;
}
.youraddress {
}
.address {
  color: #ff6347;
  margin: 0.2rem 0;
}

</style>
