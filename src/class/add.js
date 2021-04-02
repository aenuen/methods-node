import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_HTMLElement } from '../type/HTMLElement'
import { type_string } from '../type/string'
import { class_has } from './has'

/**
 * 添加 HTMLElement 的一个样式
 * @param {HTMLElement} HTMLElement
 * @param {string} className
 */
export function class_add(HTMLElement, className) {
  let functionName = 'class' + '_' + 'add'
  arguments.length === 0 && throw_empty(functionName, 'HTMLElement')
  type_HTMLElement(HTMLElement) || throw_type(functionName, 'HTMLElement', 'HTMLElement')
  arguments.length === 1 && throw_empty(functionName, 'className')
  type_string(className) || throw_type(functionName, 'className', 'string')
  // 开始处理
  class_has(HTMLElement, className) || ((function () {
    const string = HTMLElement.className
    const classNew = string + ' ' + className
    HTMLElement.className = string.length > 0 ? classNew : className
  })())
}