import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_HTMLElement } from '../type/HTMLElement'
import { type_string } from '../type/string'

/**
 * 检查 HTMLElement 的一个样式
 * @param {HTMLElement} HTMLElement
 * @param {string} className
 * @returns {boolean}
 */
export function class_has(HTMLElement, className) {
  const functionName = 'class' + '_' + 'has'
  arguments.length === 0 && throw_empty(functionName, 'HTMLElement')
  type_HTMLElement(HTMLElement) || throw_type(functionName, 'HTMLElement', 'HTMLElement')
  arguments.length === 1 && throw_empty(functionName, 'className')
  type_string(className) || throw_type(functionName, 'className', 'string')
  // 开始处理
  return !!HTMLElement.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}