<template>
 <h1 class="login-title">注册账号</h1>
    <el-form :model="LoginUser" ref="LoginForm" :rules="rules" size="medium"   class="login-form">
         <el-form-item label="国家"  prop="userphone">
              <el-input type="text" placeholder="请输入手机号" v-model="regisertuser.country"></el-input>
        </el-form-item>
        <el-form-item  prop="userphone">
              <el-input type="text" placeholder="请输入手机号" v-model="regisertuser.userphone"   ></el-input>
        </el-form-item>
        <el-form-item   prop="userpass"  >
              <el-input type="text"   placeholder="请输入密码"  v-model="regisertuser.userpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="code"  class="item-form">
                <el-row :gutter="20">
                    <el-col :span="15"><el-input  placeholder="请输入验证码" v-model.number="regisertuser.code"></el-input></el-col>
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
            <el-checkbox v-model="checked">已阅读并同意</el-checkbox>
            <el-link class="link" type="primary">《账号使用协议》</el-link>
            <el-link class="link" type="primary">《隐私政策》</el-link>
          </div>
</template>
<script lang="ts">
import { reactive,defineComponent,ref } from 'vue';
import { ElForm, ElMessage } from 'element-plus';
export default {
    props:{
      regisertuser:{
        type:Object,
        required:true
      },
      rules:{
        type:Object,
        required:true
      }
    },
    setup(){
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
                        ElMessage.success(('page.user.login.form.login-success'));
                }
            } catch (error) {
                // console.log(error);h
                ElMessage.warning('登录异常');
            }
        }
        return{
          getCodes,
          codeButton,
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