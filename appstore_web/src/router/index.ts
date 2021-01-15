import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    meta:{
      title:"登录",
      
    },
    component: ()=>import( "../views/account/Login.vue")
  },
  {
    path:"/register",
    name:"Register",
    meta:{
      title:"注册"
    },
    component: ()=>import( "../views/account/Register.vue")
  }
  ,
  {
    path:"/index",
    name:"index",
    meta:{
      title:"框架"
    },
    component: ()=>import( "../views/layout/Index.vue"),
    children:[{
      path:"/Home",
      name:"Home",
      meta:{
        title:"首页" 
      },
      component: ()=>import( "../views/home/Index.vue"),
     },{
        path:"/Appmanage",
        name:"Appmanage",
        meta:{
          title:"应用管理"
        },
        component: ()=>import( "../views/appmanage/Index.vue")
      },
      {
        path:"/UserManage",
        name:"UserManage",
        meta:{
          title:"用户管理"
        },
        component: ()=>import( "../views/usermanage/Index.vue"),
      },
      {
        path:"/Suggest",
        name:"Suggest",
        meta:{
          title:"建议&反馈"
        },
        component: ()=>import( "../views/suggest/Index.vue")
      },
      {
        path:"/Operationlog",
        name:"Operationlog",
        meta:{
          title:"操作日志"
        },
        component: ()=>import( "../views/operationlog/Index.vue")
      }
  ]
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
