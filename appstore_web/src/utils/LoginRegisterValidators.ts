import { reactive,ref } from 'vue';
/**登录 */
interface loginuser{
    userphone:string;
    userpass:string;
    code:string;
}
export const LoginUser=reactive<loginuser>({
    userphone:'',
    userpass:'',
    code:''
})

/**注册 */
interface RegisterUser{
    country: string;
    userphone: string;
    code: string;
    userpass: string;
}

export const regisertuser=reactive<RegisterUser>({
    country:"中国",
    userphone:'',
    code:'',
    userpass:''
})

interface Rules{
    userphone: {
        validator: (rule: any, value: string, callback: any) => void;
        trigger: string;
    }[];
    userpass: {
        validator: (rule: any, value: string, callback: any) => void;
        trigger: string;
    }[];
    code: {
        validator: (rule: any, value: string, callback: any) => void;
        trigger: string;
    }[];
}

const validataphone=(rule:any,value:string,callback:any)=>{
    if(value=='')
    {
        callback(new Error('请输入手机号'));
    }
    if(validataUserPhone(value))
    {
        callback(new Error('请输入正确的手机号'));
    }
    else{
        callback();
    }
}
const validatapass=(rule:any,value:string,callback:any)=>{
   
    if(value=='')
    {
        callback(new Error('请输入密码'));
    }
    if(validataPassword(value))
    {
        callback(new Error('密码格式错误'));
    }
    else{
        callback();
    }
}
const validatacode=(rule:any,value:string,callback:any)=>{
    if(value=='')
    {
        callback(new Error('请输入验证码'));
    }
    if(validataCode(value))
    {
        callback(new Error('请输入0-6位验证码'));
    }
    else{
        callback();
    }
}

export const rules=reactive<Rules>({
    userphone:[{validator:validataphone,trigger:'blur'}],
    userpass:[{validator:validatapass,trigger:'blur'}],
    code:[{validator:validatacode,trigger:'blur'}]
})

// 验证是否手机号
 function validataUserPhone(value:string){
    let reg=/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
    return !reg.test(value)?true:false;
};
function validataPassword(value:string){
   let reg= /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;
   return !reg.test(value)?true:false;
}
//6位数的验证码
 function validataCode(value:string)
{
    let reg=/^[0-9]{6}$/;
    return !reg.test(value)?true:false;
};