import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_number} from "../type/number"

/**
 * 数字的单位
 * @param {string|number} number
 * @param {string|number} fixed
 * @returns {string}
 */
export function number_unit(number, fixed) {
    const functionName = "number" + "_" + "unit"
    arguments.length === 0 && throw_empty(functionName, "number")
    type_number(number) || throw_type(functionName, "number", "number")
    arguments.length === 1 && throw_empty(functionName, "fixed")
    type_number(fixed) || throw_type(functionName, "fixed", "number")
    // 开始处理
    fixed = parseInt(fixed)
    fixed = Math.abs(fixed)
    let string = ""
    string = number < 1e3 ? number :
        1e3 <= number && number < 1e4 ? (number / 1e3).toFixed(fixed) + "千" :
            1e4 <= number && number < 1e8 ? (number / 1e4).toFixed(fixed) + "万" :
                1e8 <= number ? (number / 1e8).toFixed(fixed) + "亿" : number
    return string
}