import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import("./App"),
      children:[
        {
          path:"/home",
          component: ()=>import("./views/Home"),
        },
        {
          path:"/mine",
          component: ()=>import("./views/About"),
        }
      ]
    },
  ]
})
