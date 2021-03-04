import {throw_empty} from "../throw/empty"
import {time_object} from "./object"

/**
 * 获取时间数组（根据时间对象）
 * @param value
 * @returns {{s: number, d: number, h: number, y: number, i: number, m: number}|null}
 */
export function time_array(value) {
    const functionName = "time" + "_" + "array"
    arguments.length === 0 && throw_empty(functionName, "value")
    const timeObject = time_object(value)
    return timeObject === null ? null : {
        y: timeObject.getFullYear(),
        m: timeObject.getMonth() + 1,
        d: timeObject.getDate(),
        h: timeObject.getHours(),
        i: timeObject.getMinutes(),
        s: timeObject.getSeconds(),
        w: timeObject.getDay()
    }
}