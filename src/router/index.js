import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue'),
    meta: {
        title: '首页'
    },
    children: [
        {
            path: 'profile',
            name: 'Profile',
            component: ()=>import('../views/Profile/Profile.vue'),
            meta: {
                title: '个人简介'
            }
        },
        {
          path: 'project',
          name: 'Project',
          component: ()=>import('../views/Project/Project.vue'),
          meta: {
              title: '项目案例'
          }
        },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
