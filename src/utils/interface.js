import axios from 'axios'
import {Message} from 'antd'
let instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
  })
// http请求拦截
instance.interceptors.request.use(config =>{
    return config
},error =>{
    return Promise.reject(error)
})
// http响应拦截器
instance.interceptors.response.use(data =>{
    return data
}, error =>{
    
    switch (error.reponse.status){
        case 401:
        Message.error({
            content:'没有权限'
        })
        break;
        case 400:
            Message.error({
            content:'页面找不到了'
        })
        break;
        case 500:
            Message.error({
            content:'服务器连接超时'
        })
        break;
        default:
            Message.error({
            content:'未知错误'
        })
    }
    return Promise.reject(error)
})
export default instance