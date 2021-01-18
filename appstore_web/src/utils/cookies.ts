import Cookies from "vue-cookie";

const tokenKey="token";
const userNameKey="username";
//获取token
export const getToken=async()=>{return Cookies.get(tokenKey)};
//写入token
export const setToken=async(value:string)=>{ try{
    Cookies.set(tokenKey,value);
    return true;
} catch{
return false;
}};
//删除token
export const removeToken=async()=>{return Cookies.remove(tokenKey)};
// 写入userName
export function setUsername(value:string){ return Cookies.set(userNameKey, value); }
// 获取userName
export function getUsername(){ return Cookies.get(userNameKey); }
// 删除userName
export function removeUsername(){ return Cookies.remove(userNameKey); }
