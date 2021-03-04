import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {browser_userAgent} from "./userAgent"

/**
 * 当前浏览器类型是否在数组中
 * @param {array} array
 * @returns {boolean}
 */
export function browser_whetherIn(array) {
    const functionName = "ensure" + "_" + "whetherIn"
    arguments.length === 0 && throw_empty(functionName, "array")
    type_array(array) || throw_type(functionName, "array", "array")
    // 开始处理
    return array.some(value => browser_userAgent().indexOf(value.toLowerCase()) > 0)
}