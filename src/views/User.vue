<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" v-lazy="userInfo.img">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{userInfo.nickName}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "../api/notice";
import  {getUserInfoMessage} from '../utils/localStorage'
export default {
  name: "User",
  data() {
    return {
      userInfo: {
        img: "",
        nickName: ""
      }
    };
  },
  created() {
    let token =getUserInfoMessage('userInfo').token ;
    let openid =getUserInfoMessage('userInfo').openid;
    getUserInfo({
      ACCESS_TOKEN: token,
      OPENID: openid
    }).then(result => {
      if (result.data.status === 200) {
        this.userInfo = {
          img: result.data.info.headImgUrl,
          nickName: result.data.info.nickname
        };
        this.$emit('showContain')
      } else if (result.data.status === 400) {
        let path=this.$route.fullPath.substring(this.$route.fullPath.lastIndexOf('/')+1)
        window.location.href =window.location.origin+
          "/museumwx/weChat/auth?returnUrl=" + path;
      }
    });
  }
};
</script>

<style scoped>
.weui-panel__bd {
  background-color: #000;
}
.weui-media-box__thumb {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
.weui-media-box__hd {
  margin-right: 0.24rem;
}
.weui-media-box__title {
  color: #fff;
}
.weui-media-box {
  padding: 0.32rem 0.4rem;
}
.weui-media-box__hd {
  width: 0.8rem;
  height: 0.8rem;
}
</style>
