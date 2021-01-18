import {RoutesDataItem} from '@/utils/route';

const IndexLayout:Array<RoutesDataItem>=[
    {
        path:"/Home",
        title:"首页" ,
        component: ()=>import( "@/views/home/Index.vue"),
    },{
        path:"/Appmanage",
        title:"应用管理",
        component: ()=>import( "@/views/appmanage/Index.vue")
    },{
        path:"/UserManage",
        title:"用户管理",
        component: ()=>import( "@/views/usermanage/Index.vue"),
    },{
        path:"/Suggest",
        title:"建议&反馈",
        component: ()=>import( "@/views/suggest/Index.vue")
    },{
        path:"/Operationlog",
        title:"操作日志",
        component: ()=>import( "@/views/operationlog/Index.vue")
    }
]
export default IndexLayout;