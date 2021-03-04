import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_date} from "../type/date"
import {time_object} from "../time/object"
import {type_number} from "../type/number"

/**
 * 获取日期的月尾日期
 * @param value
 * @returns {string}
 */
export function date_monthFoot(value) {
    const functionName = "date" + "_" + "monthFoot"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeObject = time_object(value)
    type_date(timeObject) || throw_type(functionName, "value", "有效的时间")
    // 开始处理
    const year = timeObject.getFullYear()
    let month = timeObject.getMonth() + 1
    month = month > 9 ? month : "0" + month
    const date = new Date(year, month, 0).getDate()
    return year + "-" + month + "-" + date
}