import axios from 'axios';
// 创建axios对象
const service = axios.create({
    baseURL:'http://localhost:9080/',
    timeout:5000,
});
// 添加请求拦截器 前端给后端发送数据 [没有到后端]
service.interceptors.request.use((config) => {
    console.log("请求拦截器执行了=>1,{}",new Date())
    return config;
}), (error:any) => {
    return Promise.reject(new Error(error));
};

// 添加响应拦截器 后端给前端返回数据 [前端到后端了]
service.interceptors.response.use((response) => {
    console.log("响应拦截器=>1")
    const {data} = response.data;
    console.log("oooo data: ",data)
    console.log("okkkk meta");
    console.log("are you ok",response.data)
    if (response.data.code === 200) {
        console.log("执行了--hahaha--",response.data)
        return response.data;
    } else {
        console.error(data.message)
        return Promise.reject(new Error(data.message))
    }
});
// 先执行
export default service;
