import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/news'
import Detail from '@/components/detail'
import Child from '@/components/child'
import More from '@/components/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (resolve) => require(['@/components/index.vue'], resolve)
    },
    {
      path: '/news',
      name: 'News',
      components: {
        default: News,
        more: More
      },
      children: [
        {
          path: 'child',
          name: 'child',
          component: Child
        }
      ]
    },
    {
      path: '/detail/:id/page/:page',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
