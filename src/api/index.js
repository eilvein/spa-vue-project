import request from '@/utils/request'

const CONTEXT_PATH = ''

// post
export const getLessonList = data => {
    return request({
        url: `${CONTEXT_PATH}/lesson/list`,
        method: 'post',
        data: data
    })
}

// get
export const getInfo = params => {
    return request({
        url: `${CONTEXT_PATH}/`,
        method: 'get',
        params: params
    })
}
