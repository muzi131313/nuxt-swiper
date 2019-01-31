import uaDevice from '../utils/ua-device'

const isServer = process && process.server

export const actions = {
  // 全局服务初始化, 基础信息会初始化到每个页面, 例如：登陆信息
  // doc: https://zh.nuxtjs.org/guide/vuex-store/#nuxtserverinit-%E6%96%B9%E6%B3%95
  async nuxtServerInit(store, { req, params, route }) {
    const headers = req && req.headers ? req.headers : {}
    const userAgent = isServer ? headers['user-agent'] : navigator.userAgent
    const { isMobile } = uaDevice(userAgent || '')
    console.log('isMobile: ', isMobile)
    store.commit('option/SET_MOBILE', isMobile)
    return Promise.resolve()
  }
}
