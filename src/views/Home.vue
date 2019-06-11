<template>
  <div class="home" ref="home">
    <div class="content">
      <detail></detail>
      <detail-comment :commentList="commentList"></detail-comment>
      <div class="bottom-tip" v-if="loading">加载中...</div>
    </div>
  </div>
</template>

<script>
import Detail from "../components/Detail";
import DetailComment from "../components/DetailComment";
import Bscroll from "better-scroll";
import { getItemDetail, getCommentList } from "../api/detail";
export default {
  name: "home",
  data() {
    return {
      loading: false,
      page:1,
      commentList: [],
      options: {
        probeType: 3,
        pullUpLoad: {
          threshold: 100 // 开始加载的时机
        }
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    // getItemDetail({id}).then((result) => {
    //   if(result.data.status===200){
    //     console.log(result)
    //   }
    // })
    getCommentList({
      //  id,
      page: 1,
      rows: 5
    }).then(result => {
      console.log(result)
      if (result.data.status === 200) {
        let list = [];
        this.commentList = list.concat(result.data.info.rows);
      }
    });
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
  height: 12rem;
}
.content {
  position: relative;
}
.bottom-tip {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  color: #777;
  background: #f2f2f2;
  position: absolute;
  bottom: -1.4rem;
  left: 0;
}
</style>
