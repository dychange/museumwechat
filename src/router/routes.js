
export default [
      {
        path:'/',
        redirect:'/detail'
      },
      {
        path:'/author',
        name:'Author',
        component:()=> import('../views/Author.vue')
      },
      {
        path: '/detail/:id',
        name: 'home',
        component:()=> import('../views/Home.vue')
      },
      {
        path:'/notice/*',
        name:'Notice',
        component:()=> import('../views/Notice.vue'),
      },
      {
        path:'/noticedetail/:id',
        name:'NoticeDetail',
        component:()=> import('../components/NoticeDetail.vue')
      },
      {
        path:'/lostandfound/*',
        name:'LostAndFound',
        component:()=> import('../views/LostAndFound.vue')
      },
      {
          path:'/writecomment/:id',
          name:'WriteComment',
          component:()=> import('../components/WriteComment.vue')
      },
      {
        path:'/error',
        name:'Error',
        component:()=> import('../components/Error.vue')
      }
]