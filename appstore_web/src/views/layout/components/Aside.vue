<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
     >
    <template v-for="item in routers" > 
      <!-- <template v-if=""> -->
        <!-- 一级菜单 -->
      <template v-if="item.children">
        <template v-for="children in item.children">
          <router-link :to="children">
          <el-menu-item   :index="children.path">
                <i class="el-icon-menu"></i>
                <template #title>
                  {{children.meta && children.meta.title}}
                </template>
          </el-menu-item>  
          </router-link>
        </template>
      </template>
       <!-- 子级菜单
       <template v-else>
         <el-submenu  :index="item.path">
            <template #title>
              <i class="el-icon-location"></i>
              <span><router-link :to="item.path">{{item.meta && item.meta.title}}</router-link></span>
            </template>
            <template v-if="item.children.length" >
                 <el-menu-item v-for="childrenitem in item.children" :index="childrenitem.path">
                   <router-link :to="childrenitem.path"> 
                     {{childrenitem.meta.title}}
                   </router-link>
                 </el-menu-item>
            </template>
        </el-submenu>
       </template> -->
      <!-- </template> -->
    </template>
    </el-menu>
  </el-col>
  </el-row>
</template>
<script>
import {useRouter,useRoute} from "vue-router";
export default {
      name:"Aside",
      setup(){
        const {options} = useRouter();
        const routers=options.routes;
        console.log(routers);
        return{
          routers
        }
      }
}
</script>
<style lang="scss" >
.el-menu{
    background-color:rgba(255,255,255,0) !important;
}
</style>