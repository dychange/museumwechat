<template>
  <div></div>
</template>

<script>
import { saveUserInfo } from "../utils/localStorage";
export default {
  name: "Author",
  created() {
    let url = this.$route.query.url;
    let msg = {
      token: this.$route.query.token,
      openid: this.$route.query.openid
    };
    saveUserInfo('userInfo',msg)
    this.$router.push(url)
  }
};
</script>