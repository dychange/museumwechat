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
      // sessionStorage.setItem("userInfo", JSON.stringify(msg));
      saveUserInfo("userInfo", msg);
      window.location.href = window.location.origin + url;
    } else if (status == 0) {
      if (url.indexOf("?") > -1) {
        url = url.split("?")[0];
        if (url.indexOf("detail-") > -1) {
          let id = this.$route.query.url.split("-")[1];
          window.location.href = window.location.origin + "/museumwx/code-" + id;
        } else {
          window.location.href = window.location.origin + "/museumwx/code-0";
        }
      } else {
        if (url.indexOf("detail-") > -1) {
          let id = this.$route.query.url.split("-")[1];
          window.location.href = window.location.origin + "/museumwx/code-" + id;
        } else {
          window.location.href = window.location.origin + "/museumwx/code-0";          
        }
      }
    }
  }
};
</script>