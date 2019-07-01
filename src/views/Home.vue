<template>
  <div class="home" ref="home">
    <div class="content" v-show="position.flag">
      <detail :position="position" :detailInfo="detailInfo"></detail>
      <!-- <detail-comment :commentList="commentList"></detail-comment> -->
      <!-- <div class="weui-loadmore" v-if="loading">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载...</span>
      </div>-->
    </div>
    <div id="loadingToast" v-show="result">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">加载中...</p>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "../components/Detail";
import DetailComment from "../components/DetailComment";
import Bscroll from "better-scroll";
import { getItemDetail, getCommentList } from "../api/detail";
import wx from "weixin-js-sdk";
import { wxJsSdk } from "../api/code";
import {clearLocalStorage} from '../utils/localStorage'
export default {
  name: "home",
  data() {
    return {
      loading: false,
      page: 1,
      result: true,
      commentList: [],
      options: {
        probeType: 3,
        pullUpLoad: {
          threshold: 100 // 开始加载的时机
        }
      },
      position: {
        address: "定位中",
        flag: false,
        lng: "",
        lat: ""
      },
      detailInfo: {
        Name: "",
        Img: "",
        Audio: "",
        Content: ""
      }
    };
  },
  created() {
    this.itemDetail();
  },
  mounted() {
    this.wxconfig();
    // this.$nextTick(() => {
    //   this.initScroll();
    // });
  },
  methods: {
    wxconfig() {
      let url = this.$route.fullPath.substring(1);
      wxJsSdk({ url }).then(result => {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.data.appId, // 必填，公众号的唯一标识
          timestamp: result.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.data.nonceStr, // 必填，生成签名的随机串
          signature: result.data.signature, // 必填，签名
          jsApiList: ["getLocation", "updateAppMessageShareData"] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
          let that=this
          wx.getLocation({
            type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function(res) {
              that.position.lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              that.position.lng = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              that.$axios
                .get(
                  "https://restapi.amap.com/v3/geocode/regeo?output=json&location=" +
                    res.longitude +
                    "," +
                    res.latitude +
                    "&key=31b77952c046fd2d7f2d5a979de9e1dc"
                )
                .then(result => {
                  that.position.address =
                    result.data.regeocode.formatted_address;
                });
              that.position.flag = true;
              that.result = false;
            },
            cancel: function(res) {
              alert("您拒绝授权获取地理位置,无法查看此展品");
              that.result = false;
            },
            fail: function(res){
              alert('获取失败')
            }
          });
          wx.updateAppMessageShareData({
            title: that.detailInfo.Name, // 分享标题
            desc: that.detailInfo.Content, // 分享描述
            link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: that.detailInfo.Img, // 分享图标
            trigger:function(){
              clearLocalStorage()
            }
          });
        });
      });
    },
    itemDetail() {
      let id = this.$route.params.id;
      getItemDetail({ id }).then(result => {
        if (result.data.status === 200) {
          this.detailInfo = {
            Name: result.data.info.name,
            Img: result.data.info.imgName,
            Audio: result.data.info.audioName,
            Content: result.data.info.info
          };
        }
      });
    }
    // itemDetailComment() {
    // let id = this.$route.params.id;
    // getCommentList({
    //    id,
    //   page: 1,
    //   rows: 5
    // }).then(result => {
    //   console.log(result)
    //   if (result.data.status === 200) {
    //     let list = [];
    //     this.commentList = list.concat(result.data.info.rows);
    //   }
    // });
    // },
    // initScroll() {
    //   this.scroll = new Bscroll(this.$refs.home, this.options);
    //   this.pullUpLoadEvent();
    // },
    // pullUpLoadEvent() {
    //   this.scroll.on("pullingUp", () => {
    //     this.page++;
    //     this.loading = true;
    //     getCommentList({
    //       page: this.page,
    //       rows: 5
    //     }).then(result => {
    //       if (result.data.status === 200) {
    //         let list = this.commentList;
    //         this.commentList = list.concat(result.data.info.rows);
    //         this.finishPulling();
    //       }
    //     });
    //   });
    // },
    // finishPulling() {
    //   this.loading = false;
    //   this.scroll.finishPullUp(); // 结束上拉加载更多
    //   this.scroll.refresh(); // dom节点变化，重新计算better-scroll
    // }
  },
  components: {
    Detail,
    DetailComment
  }
};
</script>

<style scoped>
.home {
  height: 16rem;
}
.content {
  position: relative;
}
.weui-loadmore {
  width: 100%;
  height: 0.7rem;
  margin: 0;
  background-color: #f5f5f5;
}
.weui-toast {
  width: 2.4rem;
  min-height: 2.4rem;
  top: 3.6rem;
  margin-left: -1.2rem;
  border-radius: 0.1rem;
}
.weui-icon_toast.weui-loading {
  margin-top: 0.64rem;
  width: 0.76rem;
  height: 0.76rem;
}
.weui-toast__content {
  margin-bottom: 0.32rem;
  font-size: 0.28rem;
}
</style>
