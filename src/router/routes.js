
export default [
      {
        path:'/museumwx/author',
        name:'Author',
        component:()=> import('../views/Author.vue')
      },
      {
        path: '/museumwx/detail-:id',
        name: 'home',
        component:()=> import('../views/Home.vue')
      },
      {
        path:'/museumwx/notice/',
        name:'Notice',
        component:()=> import('../views/Notice.vue'),
      },
      {
        path:'/museumwx/noticedetail-:id',
        name:'NoticeDetail',
        component:()=> import('../components/NoticeDetail.vue')
      },
      {
        path:'/museumwx/lostandfound/',
        name:'LostAndFound',
        component:()=> import('../views/LostAndFound.vue')
      },
      {
        path:'/museumwx/error',
        name:'Error',
        component:()=> import('../components/Error.vue')
      },
      {
        path:'/museumwx/code-:id',
        name:'Code',
        component:()=> import('../components/Code.vue')
      }
]