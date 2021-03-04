import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {time_array} from "../time/array"

/**
 * 获取一个时间的周几，如无参数则为当前周几
 * @param value
 * @returns {string|number}
 */
export function date_week(value) {
    const functionName = "date" + "_" + "week"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeArray = time_array(value)
    timeArray === null && throw_type(functionName, "value", "有效的时间")
    return timeArray["w"]
}