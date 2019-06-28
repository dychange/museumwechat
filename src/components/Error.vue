<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area">
      <i class="weui-icon-warn weui-icon_msg"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">错误!</h2>
      <p class="weui-msg__desc">
        定位失败,无法查看此展品,请打开定位重新扫描二维码
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
.weui-msg__icon-area{
  margin-bottom: .5rem;
}
.weui-msg__text-area{
  padding: 0 .2rem;
}
.weui-msg__title{
  font-size: .4rem;
  margin-bottom: .2rem;
}
.weui-msg__desc{
  font-size: .28rem;
}

</style>
