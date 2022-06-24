// 正则校验
export const USER_NAME_REGEXP: RegExp = /^[0-9]{10}$/

// 请求url
export const BASE_URL = process.env.NODE_ENV==='development'?'https://mock.apifox.cn/m1/1135409-0-default/':''
