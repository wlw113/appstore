import axios from "axios";
import { getToken } from "./cookies";
import router from '@/router/index';
import { ElNotification } from 'element-plus';
//响应数据
export interface ResponseData{
  code:number;
  data?:any;
  msg?:string;
  token?:string;
}
const serverCodeMessage: {[key: number]: string} = {
  200: '服务器成功返回请求的数据',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: '服务器发生错误，请检查服务器(Internal Server Error)',
  502: '网关错误(Bad Gateway)',
  503: '服务不可用，服务器暂时过载或维护(Service Unavailable)',
  504: '网关超时(Gateway Timeout)',
};
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000,
});
  // 添加请求拦截器
  service.interceptors.request.use(async function (config) {
    // 在发送请求之前做些什么
    const headerToken=await getToken();
    //添加请求头信息
    if (headerToken) {
      config.headers["token"] = headerToken;
     }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    errorHandler(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  const customCodeMessage: {[key: number]: string} = {
    10002: '当前用户登入信息已失效，请重新登入再操作', // 未登陆
  };
/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
  const { response, message } = error;
  if (message === 'CustomError') {
      // 自定义错误
      const { config, data } = response;
      const { url, baseURL} = config;
      const { code, msg } = data;
      const reqUrl = url.split("?")[0].replace(baseURL, '');
      // const noVerifyBool = settings.ajaxResponseNoVerifyUrl.includes(reqUrl);
      const noVerifyBool = reqUrl;
      if (!noVerifyBool) {
          ElNotification({
              type: 'error',
              title: `提示`,
              message: customCodeMessage[code] || msg || 'Error',
          });

          if (code === 10002) {
              router.replace('/user/login');
          }
      }
  } else if (message === 'CancelToken') {
      // 取消请求 Token
      // eslint-disable-next-line no-console
      console.log(message);
  } else if (response && response.status) {
      const errorText = serverCodeMessage[response.status] || response.statusText;
      const { status, request } = response;
      ElNotification({
          type: 'error',
          title: `请求错误 ${status}: ${request.responseURL}`,
          message: errorText,
      });
  } else if (!response) {
      ElNotification({
          type: 'error',
          title: '网络异常',
          message: '您的网络发生异常，无法连接服务器',
      });
  }

  return Promise.reject(error);
}


  export default service;