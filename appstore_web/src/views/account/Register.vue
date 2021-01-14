<template>
  <div id="login">
     <div class="login-wrap">
            <!-- 注册 -->
            <RegisterForm :regisertuser="regisertuser" :rules="rules"  />
     </div>
  </div>
</template>
<script lang="ts">
import { reactive,defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import{regisertuser,rules} from "@/utils/LoginRegisterValidators";
import RegisterForm from './components/RegisterForm.vue';

export default defineComponent({
    name:'register',
    components:{RegisterForm},
    setup(){
      return {
       regisertuser,
       rules
      };
    }
});
</script>
<style lang="scss" scoped>
#login{
height: 100vh;
background-color: #ffffff;
}
.login-wrap{
    width:330px;
    margin:auto;
}
.menu-tab{
    text-align:center;
    li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size:14px;
        color: blue;
        border-radius: 2px;
        cursor:pointer;
    }
    .current{
        background-color: rgba(0,0,0,.1);
    }
}

</style>