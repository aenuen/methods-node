import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 文件大小的单位
 * @param {number|string} fileSize 文件大小
 * @param {number|string} fixed 保留浮点位数
 * @returns {string}
 */
export function file_unit(fileSize, fixed) {
  const functionName = 'file' + '_' + 'unit'
  arguments.length === 0 && throw_empty(functionName, 'fileSize')
  type_string(fileSize) || throw_type(functionName, 'fileSize', 'string')
  arguments.length === 1 && throw_empty(functionName, 'fixed')
  type_number(fixed) || throw_type(functionName, 'fixed', 'number')
  // 开始处理
  fixed = +fixed
  const array = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1024,
    i = Math.floor(Math.log(fileSize) / Math.log(k))
  return (fileSize / Math.pow(k, i)).toFixed(fixed) + array[i]
}