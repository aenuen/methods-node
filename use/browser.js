import { browser_infoJson } from '../src/browser/infoJson'
import { browser_userAgent } from '../src/browser/userAgent'
import { browser_whetherIn } from '../src/browser/whetherIn'
import { browser_whetherMobile } from '../src/browser/whetherMobile'
import { browser_whetherPc } from '../src/browser/whetherPc'

export function _browser_infoJson() {
  return browser_infoJson()
}

export function _browser_userAgent() {
  return browser_userAgent()
}

export function _browser_whetherIn(array) {
  return browser_whetherIn(array)
}

export function _browser_whetherMobile() {
  return browser_whetherMobile()
}

export function _browser_whetherPc() {
  return browser_whetherPc()
}