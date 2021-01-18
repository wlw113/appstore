<template>
<h1 class="login-title">主账号登录</h1>
 <ul class="menu-tab">
                <li  v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
            </ul>
   <el-form :model="LoginUser" ref="LoginForm" :rules="rules" size="medium"   class="login-form">
              <el-form-item  prop="userphone">
              <el-input type="text" placeholder="请输入手机号" v-model="LoginUser.userphone"   ></el-input>
            </el-form-item>
            <el-form-item   prop="userpass" v-if="menuTab[1].current" >
              <el-input type="text"   placeholder="请输入密码"  v-model="LoginUser.userpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="code"  v-if="menuTab[0].current" class="item-form">
                    <el-row :gutter="20">
                        <el-col :span="15"><el-input  placeholder="请输入验证码" v-model.number="LoginUser.code"></el-input></el-col>
                        <el-col :span="9">
                            <el-button type="success" @click="getCodes()" class="block" :disabled="codeButton.status" >{{codeButton.text}}</el-button>
                            </el-col>
                    </el-row>
                </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit" class="login-btn block">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="foot">
            <el-link class="link" type="info">隐私政策</el-link>
            <el-link class="link" type="primary"><router-link to="/register">注册账号</router-link></el-link>
            <el-link class="link" type="primary">子账号登录</el-link>
          </div>
</template>
<script lang="ts">
import { reactive,defineComponent,ref,getCurrentInstance} from 'vue';
import { ElForm, ElMessage } from 'element-plus';
import { getCode,accountLogin } from '../../../service/account';
import {useRoute, useRouter} from 'vue-router';
export default {
    props:{
      LoginUser:{
        type:Object,
        required:true
      },
      rules:{
        type:Object,
        required:true
      }
    },
    setup(porps:any){
      const ctx=getCurrentInstance();
      const router=useRouter();
      //menu菜单
      const menuTab=reactive([
          {txt:'短信验证码登录',current:true,type:'phoneLogin'},
          {txt:'密码登录',current:false,type:'passwordLogin'}
       ])
      //菜单切换函数
       const toggleMenu=(data:any):void=>{
              menuTab.forEach(element => {
                  element.current=false
              });
              //高光
              data.current=true;
            console.log(ctx);
             
          }
       //验证码按钮
        const codeButton=reactive({
          status:false,
          text:'发送验证码'
        })
        //发送验证码
        const getCodes=():void=>{
          codeButton.status=true;
          codeButton.text='已发送'
          countDown(10);
        }
      /**函数 */
        //倒计时函数
        const timer=ref();
        const countDown=(num:number):any=>{
          let time=num;
          timer.value=setInterval(()=>{
            time--;
            console.log(time);
            if(time===0)
            {
              clearInterval(timer.value);
              codeButton.status=false;
              codeButton.text="获取验证码";
            }
            else{
            codeButton.text='已发送('+time+')秒';
            }
          },1000)
        }
           // form
        const LoginForm = ref<typeof ElForm>();
        // 登录
        const handleSubmit = async () => {
            try {
                const valid: boolean | undefined =  await LoginForm.value?.validate();
                console.log(valid);
                if(valid === true) {
                    // const res: boolean = await store.dispatch('userlogin/login',modelRef);
                        // ElMessage.success(('page.user.login.form.login-success'));
                        // const response: ResponseDataaccountLogin(porps.LoginUser)
                        router.push("/Home");
                }
            } catch (error) {
                console.log(error);
                // console.log(error);h
                ElMessage.warning('登录异常');
            }
        }
        return{
          getCodes,
          codeButton,
          menuTab,
          toggleMenu,
          handleSubmit,
          LoginForm
        }
    }
}
</script>
<style lang="scss" scoped>

.menu-tab{
    text-align:center;
    li{
        display: inline-block;
        width: 130px;
        line-height: 36px;
        font-size:14px;
        color: #ffffff;
        border-radius: 2px;
        cursor:pointer;
    }
    .current{
        background-color: rgba(0,0,0,.1);
    }
}
.login-form{
    margin-top: 29px;
    label{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #ffffff;
    }
    .item-from{margin-bottom: 13px;}
    .block{
        display: block;
        width:100%;
    }
    .login-btn{margin-top: 10px;}
    }
    
    
</style>