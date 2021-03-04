import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_date} from "../type/date"
import {time_object} from "../time/object"
import {date_apartDate} from "./apartDate"

/**
 * 获取日期这一周的周日日期
 * @param value
 * @returns {string}
 */
export function date_weekSunday(value) {
    const functionName = "date" + "_" + "weekSunday"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeObject = time_object(value)
    type_date(timeObject) || throw_type(functionName, "value", "有效的时间")
    // 开始处理
    const week = timeObject.getDay()
    const numberArray = [0, -1, -2, -3, -4, -5, -6]
    return date_apartDate(timeObject, numberArray[week])
}