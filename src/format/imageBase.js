import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 是否 imageBase 格式
 * @param value
 * @returns {boolean}
 */
export function format_imageBase(value) {
  const functionName = 'format' + '_' + 'imageBase'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_string(value) || throw_type(functionName, 'value', 'string')
  // 开始处理
  return /^data:image\/(bmp|png|gif|jpg|jpeg);base64,/.test(value)
}