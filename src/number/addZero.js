import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_number} from "../type/number"

/**
 * 数字位数不足补零
 * @param {number|string} number
 * @param {number|string} length
 * @returns {string}
 */
export function number_addZero(number, length) {
    const functionName = "number" + "_" + "addZero"
    arguments.length === 0 && throw_empty(functionName, "number")
    type_number(number) || throw_type(functionName, "number", "number")
    // 开始处理
    number = parseInt(number)
    length = parseInt(length)
    const diff = length - number.toString().length
    return diff > 0 ? Array(diff).join("0") + number : number.toString()
}