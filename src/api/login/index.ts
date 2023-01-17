import request from '@/utils/request'

export function loginApi(data:object) {
    return request({
        url: 'auth/login',
        method: 'post',
        data
    })
}

// 退出系统
export function logoutApi() {
    return request({
        url: 'auth/logout'
    })
}