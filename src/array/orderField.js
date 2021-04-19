import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_boolean } from '../type/boolean'
import { type_string } from '../type/string'
import { arrayJson_reverse } from '../arrayJson/reverse'

/**
 * 根据字段进行 array 的排序
 * @param {array|json} array 必须是[[],[],...]或[{},{},...]的形式
 * @param {number|string} field 字段名字：如果是 array 时，请用 array 的下标
 * @param {boolean} boolean 排序顺序：(true)从小到大，(false)从大到小
 * @example arrayJson_orderField([[1, "a", 9], [2, "b", 8], [3, "c", 7], [4, "d", 6]], 1, false)
 * @example arrayJson_orderField([{"a": 3}, {"a": 2}, {"a": 1}], "a")
 * @returns {array|[[],[],...]|[{},{},...]}
 */
export function array_orderField(array, field, boolean) {
  const functionName = 'array' + '_' + 'orderField'
  arguments.length === 0 && throw_empty(functionName, 'array')
  type_array(array) || throw_type(functionName, 'array', 'array')
  arguments.length === 1 && throw_empty(functionName, 'field')
  type_string(field) || throw_type(functionName, 'field', 'number|string')
  arguments.length === 2 && throw_empty(functionName, 'boolean')
  type_boolean(boolean) || throw_type(functionName, 'boolean', 'boolean')
  // 开始处理
  const result = array.sort(function(a, b) {
    const x = a[field]
    const y = b[field]
    return x < y ? -1 : x > y ? 1 : 0
  })
  return boolean ? result : arrayJson_reverse(result)
}