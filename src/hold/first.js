import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 字符串中保留第一个指定字符（字符串）
 * @param {number|string} string
 * @param {number|string} char
 * @returns {string}
 */
export function hold_first(string, char) {
  const functionName = 'hold' + '_' + 'first'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  arguments.length === 1 && throw_empty(functionName, 'char')
  type_string(char) || throw_type(functionName, 'char', 'string')
  // 开始处理
  const name = '@@#@@'
  return string.replace(new RegExp(`\\${char}+`), `${char}`)
    .replace(new RegExp(`\\${char}`), `${name}`)
    .replace(new RegExp(`\\${char}`, 'g'), '')
    .replace(new RegExp(`\\${name}`, 'g'), `${char}`)
}
