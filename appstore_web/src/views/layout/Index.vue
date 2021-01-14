<template>
    <el-container class="container">
    <el-aside id="aside" width="200px">
        <h3>logo</h3>
        <h3 style="color:white">安之眼开放平台</h3>
        <LayoutAside />
    </el-aside>
    <el-container>
      <el-header>
          <LayoutHeader />
      </el-header>
      <el-main>
          <LayoutMain />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import LayoutAside from "./components/Aside.vue";
import LayoutHeader from "./components/Header.vue";
import LayoutMain from "./components/Main.vue"
export default {
    name:'layout',
    components:{LayoutAside,LayoutHeader,LayoutMain}
}
</script>
<style lang="scss" >
.el-header, .el-footer {
    background-color:rgba(211, 211, 204, 0.4);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .container {
    height: 100vh !important;
  }
  #aside{
      background-color:#0B243B ;
  }

</style>