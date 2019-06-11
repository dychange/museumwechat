import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

 const router= new Router({
  routes: [
    {
      path:'/',
      redirect:'/detail/'
    },
    {
      path: '/detail/:id',
      name: 'home',
      component: Home
    },
    {
      path:'/notice',
      name:'Notice',
      component:()=> import('../views/Notice.vue')
    },
    {
      path:'/lostandfound',
      name:'LostAndFound',
      component:()=> import('../views/LostAndFound.vue')
    }
  ]
})


export default router