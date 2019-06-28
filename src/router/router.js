import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {getUserInfoMessage} from '../utils/localStorage'

Vue.use(Router)



 const router= new Router({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
      if(!getUserInfoMessage('userInfo') && to.path!=='/museumwx/author'){
       let path= to.fullPath.substring(to.fullPath.lastIndexOf('/')+1)
        window.location.href=window.location.origin+'/museumwx/weChat/auth?returnUrl='+path
        // window.location.href.substring(0,window.location.href.lastIndexOf('/'))
      }else{
        next();
      }
})


export default router