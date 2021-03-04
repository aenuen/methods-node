import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {time_array} from "../time/array"

/**
 * 获取一个时间的年份
 * @param value
 * @returns {string|number}
 */
export function date_year(value) {
    const functionName = "date" + "_" + "year"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeArray = time_array(value)
    timeArray === null && throw_type(functionName, "value", "有效的时间")
    // 开始处理
    return timeArray["y"]
}