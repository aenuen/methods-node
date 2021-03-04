import {throw_empty} from "../throw/empty"
import {type_date} from "../type/date"
import {type_string} from "../type/string"
import {type_number} from "../type/number"
import {format_number} from "../format/number"

/**
 * 获取时间对象
 * @param value
 * @returns {null|Date}
 */
export function time_object(value) {
    const functionName = "time" + "_" + "object"
    arguments.length === 0 && throw_empty(functionName, "value")
    // 开始处理
    let timeObject
    if (type_date(value)) {
        timeObject = value
    } else {
        type_string(value) && (value = format_number(value) ? parseInt(value) : value.replace(new RegExp(/[.|-]/gm), "/"))
        type_number(value) && value.toString().length === 10 && (value *= 1000)
        timeObject = new Date(value)
    }
    return type_date(timeObject) ? timeObject : null
}