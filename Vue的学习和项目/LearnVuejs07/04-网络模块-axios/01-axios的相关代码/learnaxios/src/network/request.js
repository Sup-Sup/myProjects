import axios from "axios"

export function request(config){
  
    // 1.创建axios 的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.axios的拦截器 .use(两个函数), 拦截下来了，要给出去，不然另一处接收不到
    //  请求拦截的使用场景： 比如config中的一些信息不符合服务器的要求  比如每次发送网络请求时，都希望在界面中显示一个请求的图标
                                // 比如在某些网络请求（如：登录（token）），必须携带一些特殊的信息
    instance.interceptors.request.use(aaa => {
      // console.log(aaa);
      return aaa;
    }, err => {
      // console.log(err);
    })

    instance.interceptors.response.use(res => {
      console.log(res);
      return res.data
    }, err => {
      console.log(res);
    })
    // 发送网络请求
   return instance(config)
  
}
// export function request(config){
//   return new Promise((resolve,reject) => {
//     // 创建axios 的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 发送网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// export function request(config,success,failure){
//   // 1.创建axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//   .then(res => {
//     // console.log(res);
//     success(res);
//   })
//   .catch(err => {
//     // console.log(err);
//     failure(err)
//   })
// }

// export function request(config){
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseConfig)
//   .then(res => {
//     config.success(res)
//   })
//   .catch(err => {
//     config.failure(err)
//   })
// }
