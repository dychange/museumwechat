import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {getUserInfoMessage} from '../utils/localStorage'

Vue.use(Router)



 const router= new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
      if(!getUserInfoMessage('userInfo') && to.path!=='/author'){
        next({path:'/author',query:{url:'',token:'',openid:''}});
      }else{
        next();
      }
})


export default router