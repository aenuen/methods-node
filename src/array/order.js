import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {type_boolean} from "../type/boolean"
import {type_number} from "../type/number"

/**
 *  排序数组
 * @param {array} array 要排序的数组
 * @param {boolean} order 排序方式：(true)从小到大，(false)从大到小
 * @returns array
 */
export function array_order(array, order) {
    const functionName = "array" + "_" + "order"
    arguments.length === 0 && throw_empty(functionName, "array")
    type_array(array) || throw_type(functionName, "array", "array")
    arguments.length === 1 && throw_empty(functionName, "order")
    type_boolean(order) || throw_type(functionName, "order", "boolean")
    // 开始处理
    let ary = [...array]
    ary.sort(function (a, b) {
        a = type_number(a) ? +a : a
        b = type_number(b) ? +b : b
        return a > b ? 1 : -1
    })
    return order ? ary : ary.reverse()
}