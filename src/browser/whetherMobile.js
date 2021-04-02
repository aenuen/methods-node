import { browser_userAgent } from './userAgent'

/**
 * 当前浏览器是否是 Mobile 浏览器
 * @returns {boolean}
 */
export function browser_whetherMobile() {
  return /mobi/i.test(browser_userAgent())
}