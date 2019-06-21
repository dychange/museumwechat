<template>
    <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" :src="userInfo.img" />
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">{{userInfo.nickName}}</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'User',
    data() {
        return {
            userInfo:{
                img:'',
                nickName:''
            }
        }
    },
   created() {
      let userInfo=JSON.parse(localStorage.getItem('userInfo')) 
      this.userInfo={
          img:userInfo.img,
          nickName:userInfo.nickName
      }
   },
}
</script>

<style scoped>
.weui-panel__bd{
    background-color: #000;
}
.weui-media-box__thumb{
    border-radius: 50%;
    height: 100%;
    width: 100%;
}
.weui-media-box__hd{
    margin-right: .24rem;
}
.weui-media-box__title{
    color: #fff;
}
.weui-media-box{
    padding: .32rem .4rem;
}
.weui-media-box__hd{
    width: .8rem;
    height: .8rem;
}
</style>
