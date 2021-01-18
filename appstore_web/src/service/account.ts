import service from "@/utils/request";

export function getCode(params:any){
    console.log(params);
   return service.request({
    url:'/user',
    method:"get",
    params:params
})
}
export async function accountLogin(params: any): Promise<any> {
    return service.request({
        url: '/user/login',
        method: 'POST',
        data: params,
    });
}

// service.request({
//     url:'/user',
//     method:"post",
//     data:{
//         id:123456
//     }
// })