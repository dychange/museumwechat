import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


Vue.use(Router)



 const router= new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   let wx = navigator.userAgent.toLowerCase()
//   if (wx.match(/MicroMessenger/i) === 'micromessenger') {
//     next()
//   } else {
//     alert('请用微信打开')
//     next(false)
//   }
// })


export default router