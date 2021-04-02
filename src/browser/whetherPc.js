import { browser_whetherMobile } from './whetherMobile'

/**
 * 当前浏览器是否是 Pc 浏览器
 * @returns {boolean}
 */
export function browser_whetherPc() {
  return !browser_whetherMobile()
}