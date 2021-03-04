import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_date} from "../type/date"
import {time_object} from "./object"

/**
 * 两个时间相差多少秒
 * @param timeOne
 * @param timeTwo
 * @returns {string|number}
 */
export function time_diff(timeOne, timeTwo) {
    const functionName = "time" + "_" + "diff"
    arguments.length === 0 && throw_empty(functionName, "timeOne")
    const timeOneObject = time_object(timeOne)
    type_date(timeOneObject) || throw_type(functionName, "timeOne", "有效的时间")
    arguments.length === 1 && throw_empty(functionName, "timeTwo")
    const timeTwoObject = time_object(timeTwo)
    type_date(timeTwoObject) || throw_type(functionName, "timeTwo", "有效的时间")
    // 开始处理
    return (Math.abs(timeOneObject - timeTwoObject) / 1000).toFixed(0)
}