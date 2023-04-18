import axios from 'axios';
// 创建axios对象
const service = axios.create({
    baseURL:'http://localhost:9080/',
    timeout:5000,
});
// 添加请求拦截器 前端给后端发送数据 [没有到后端]
service.interceptors.request.use((config) => {
    console.log("请求拦截器执行了=>1")
    return config;
}), (error:any) => {
    return Promise.reject(new Error(error));
};

// 添加响应拦截器 后端给前端返回数据 [前端到后端了]
service.interceptors.response.use((response) => {
    console.log("响应拦截器=>1")
    const {data, meta} = response.data;
    if (meta.status === 200) {
        return response.data;
    } else {
        console.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
    }
});
// 先执行
export default service;
