import { browser_userAgent } from './userAgent'

/**
 * 浏览器信息数组
 * @returns {{edge: boolean, opera: boolean, weiXin: boolean, safari: boolean, chrome: boolean, android: boolean, firefox: boolean, ipad: boolean, ie: boolean, iphone: boolean}}
 */
export function browser_infoJson() {
  const userAgent = browser_userAgent()
  return {
    'android': userAgent.indexOf('android'.toLowerCase()) >= 0,
    'iphone': userAgent.indexOf('iphone'.toLowerCase()) >= 0,
    'ipad': userAgent.indexOf('ipad'.toLowerCase()) >= 0,
    'ie': (!!window.ActiveXObject || 'ActiveXObject' in window),
    'edge': userAgent.indexOf('edge'.toLowerCase()) >= 0,
    'safari': userAgent.indexOf('safari'.toLowerCase()) >= 0,
    'firefox': userAgent.indexOf('firefox'.toLowerCase()) >= 0,
    'chrome': userAgent.indexOf('chrome'.toLowerCase()) >= 0,
    'opera': userAgent.indexOf('opera'.toLowerCase()) >= 0,
    'weiXin': userAgent.indexOf('MicroMessenger'.toLowerCase()) >= 0
  }
}