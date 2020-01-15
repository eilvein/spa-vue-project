import axios from 'axios'
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
}

const service = axios.create({
    timeout: 6000,
    baseURL: process.env.VUE_APP_API
})

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        // 以下代码，鉴权token,可根据具体业务增删。
        //   if (store.getters.token) {
        //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        //   };
        return config
    },
    error => {
        // 当出现请求错误是做一些处理
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        return checkStatus(response)
    },
    error => {
        const { response, code } = error
        // 接口请求异常统一处理
        if (code === 'ECONNABORTED') {
            // Timeout error
            console.log('Timeout error', code)
        }
        if (response) {
            // 请求已发出，但是不在2xx的范围
            // 对返回的错误进行一些处理
            return Promise.reject(checkStatus(error))
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            console.log('断网了~')
        }
    }
)

function checkStatus(response) {
    // 如果http状态码正常，则直接返回数据
    if (response) {
        const { status, statusText } = response
        if ((status >= 200 && status < 300) || status === 304) {
            // 如果不需要除了data之外的数据，可以直接 return response.data
            return response.data
        }
        return {
            status,
            msg: codeMessage[status] || statusText
        }
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

export default service
