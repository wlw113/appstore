<template>
  <div class="login">
     <div class="login-wrap">
            <!-- 登录 -->
            <LoginForm :LoginUser="LoginUser" :rules="rules"  />
     </div>
  </div>
</template>
<script lang="ts">
import { reactive,defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import{LoginUser,rules} from "@/utils/LoginRegisterValidators";
import LoginForm from './components/LoginForm.vue';

export default defineComponent({
    name:'login',
    components:{LoginForm},
    setup(){
      

        
      return {
       LoginUser,
       rules
      };
    }
});
</script>
<style lang="scss" scoped>
@import url('../../styles/account.scss');
// .login{
// height: 100vh;
// background-color: #ffffff;
// // background: url("../../assets/login/loginbackgroundImage.jpg") no-repeat;
// background-size:100% 100%;
// background-size: cover;
// -webkit-background-size: cover;
// -o-background-size: cover;
// }

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