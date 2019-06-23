<template>
  <div class="home" ref="home">
    <div class="content" v-show="position.flag">
      <detail :position="position"></detail>
      <detail-comment :commentList="commentList"></detail-comment>
      <div class="weui-loadmore" v-if="loading">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载...</span>
      </div>
    </div>
    <div id="loadingToast" v-show="!position.flag">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">数据加载中</p>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "../components/Detail";
import DetailComment from "../components/DetailComment";
import Bscroll from "better-scroll";
import { getItemDetail, getCommentList } from "../api/detail";
import { location } from "../lib/location";
export default {
  name: "home",
  data() {
    return {
      loading: false,
      page: 1,
      commentList: [],
      options: {
        probeType: 3,
        pullUpLoad: {
          threshold: 100 // 开始加载的时机
        }
      },
      position: {
        lat: null,
        lng: null,
        address: "定位中",
        flag: false
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        console.log(result);
        vm.position.lat = result.position.lat;
        vm.position.lng = result.position.lng;
        vm.position.address = result.formattedAddress;
        vm.position.flag = true;
      });
      AMap.event.addListener(geolocation, "error", onError => {
        console.log(onError);
        vm.position.address = "定位失败";
        vm.position.flag = true;
      });
    });
  },
  created() {
    let id = this.$route.params.id;
    // getItemDetail({id}).then((result) => {
    //   if(result.data.status===200){
    //     console.log(result)
    //   }
    // })
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
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      this.scroll = new Bscroll(this.$refs.home, this.options);
      this.pullUpLoadEvent();
    },
    pullUpLoadEvent() {
      this.scroll.on("pullingUp", () => {
        this.page++;
        this.loading = true;
        getCommentList({
          page: this.page,
          rows: 5
        }).then(result => {
          if (result.data.status === 200) {
            let list = this.commentList;
            this.commentList = list.concat(result.data.info.rows);
            this.finishPulling();
          }
        });
      });
    },
    finishPulling() {
      this.loading = false;
      this.scroll.finishPullUp(); // 结束上拉加载更多
      this.scroll.refresh(); // dom节点变化，重新计算better-scroll
    }
  },
  components: {
    Detail,
    DetailComment
  }
};
</script>

<style scoped>
.home {
  height: 15rem;
}
.content {
  position: relative;
}
.weui-loadmore {
  height: 0.7rem;
  margin: 0.8rem auto;
  background-color: #f5f5f5;
}
</style>
