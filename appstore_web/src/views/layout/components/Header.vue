<template>
<div class="header-user">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        用户名称<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"><router-link to="/">退出登录</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header-user{
    float:right;
}
</style>