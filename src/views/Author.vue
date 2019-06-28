<template>
  <div></div>
</template>

<script>
import { saveUserInfo } from "../utils/localStorage";
export default {
  name: "Author",
  created() {
    let status = this.$route.query.status;
    let url = "/museumwx/" + this.$route.query.url;
    if (status == 1) {
      let msg = {
        token: this.$route.query.token,
        openid: this.$route.query.openid
      };
      saveUserInfo("userInfo", msg);
      window.location.href = window.location.origin + url;
    } else if (status == 0) {
      if (url.indexOf("/detail-") > -1) {
        let id = this.$route.query.url.split("-")[1];
        this.$router.replace("/museumwx/code-" + id);
      }else{
        this.$router.replace('/museumwx/code-0')
      }
    }
  }
};
</script>