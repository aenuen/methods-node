import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {type_json} from "../type/json"

/**
 * 保留 arrayJson 中指定 holdValue 值
 * @param {[]|{}} arrayJson
 * @param {[]} holdValue
 * @returns {[]}
 */
export function arrayJson_holdAssignValue(arrayJson, holdValue) {
    const functionName = "arrayJson" + "_" + "holdAssignValue"
    arguments.length === 0 && throw_empty(functionName, "arrayJson")
    const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
    typeArray || typeJson || throw_type(functionName, "arrayJson", "array|json")
    arguments.length === 1 && throw_empty(functionName, "holdValue")
    type_array(holdValue) || throw_type(functionName, "holdValue", "array")
    // 开始处理
    let result = typeArray ? [] : {}
    Object.keys(holdValue).forEach((k) => {
        Object.keys(arrayJson).forEach((key) => {
            JSON.stringify(holdValue[k]) === JSON.stringify(arrayJson[key]) && (
                typeArray ? result.push(arrayJson[key]) : result[key] = arrayJson[key]
            )
        })
    })
    return result
}