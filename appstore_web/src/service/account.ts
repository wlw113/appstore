import service from "@/utils/request";

export function getCode(params:any){
    console.log(params);
   return service.request({
    url:'/user',
    method:"get",
    params:params
})
}

// service.request({
//     url:'/user',
//     method:"post",
//     data:{
//         id:123456
//     }
// })