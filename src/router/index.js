import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Frame from '@/layout/Frame';
import FirstPage from '@/components/FirstPage';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: "/login",
      name: "login",
      component: HelloWorld
    },
    {
      path: "/register",
      name: "register",
      component: HelloWorld
    },
    {
      path: "/wdh",
      component: Frame,
      children: [
        {
          path: "/",    // 默认加载 子路径与父路径相同的情况下会自动加载
          name: "index",
          component: HelloWorld
        },
        {
          path: "/wdh/list",
          name: "第一个页面",
          component: FirstPage
        }
      ],
    }
  ]
})
