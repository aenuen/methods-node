import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_date} from "../type/date"
import {time_object} from "../time/object"
import {date_apartDate} from "./apartDate"
import {date_month} from "./month"
import {date_monthHead} from "./monthHead"
import {date_year} from "./year"

/**
 * 获取日期的上月年份和日份
 * @param value
 * @returns {array}
 */
export function data_prevMonth(value) {
    const functionName = "date" + "_" + "prevMonth"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeObject = time_object(value)
    type_date(timeObject) || throw_type(functionName, "value", "有效的时间")
    // 开始处理
    const apart_date = date_apartDate(date_monthHead(value), -1)
    return [date_year(apart_date), date_month(apart_date)]
}