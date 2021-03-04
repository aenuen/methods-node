import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_number} from "../type/number"

/**
 * 是否闰年
 * @param {number|string} year
 * @returns {boolean}
 */
export function some_whetherLeapYear(year) {
    const functionName = "some" + "_" + "whetherLeapYear"
    arguments.length === 0 && throw_empty(functionName, "year")
    type_number(year) || throw_type(functionName, "year", "number")
    // 开始处理
    year = parseInt(year)
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}