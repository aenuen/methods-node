import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {type_boolean} from "../type/boolean"
import {type_json} from "../type/json"
import {arrayJson_resetKeyOne} from "./resetKeyOne"

/**
 * 删除 arrayJson 中的 assignValue 值
 * @param {[]|{}} arrayJson
 * @param {[]} assignValue
 * @param {boolean} boolean：arrayJson 为 array 且 boolean 为 true ，那么返回重置 KeyName 后的 array
 * @returns {[]|{}}
 */
export function arrayJson_deleteAssignValue(arrayJson, assignValue, boolean) {
    const functionName = "arrayJson" + "_" + "deleteAssignValue"
    arguments.length === 0 && throw_empty(functionName, "arrayJson")
    const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
    typeArray || typeJson || throw_type(functionName, "arrayJson", "array|json")
    arguments.length === 1 && throw_empty(functionName, "assignValue")
    type_array(assignValue) || throw_type(functionName, "assignValue", "array")
    arguments.length === 2 && throw_empty(functionName, "boolean")
    type_boolean(boolean) || throw_type(functionName, "boolean", "boolean")
    // 开始处理
    const NAJ = typeArray ? [...arrayJson] : JSON.parse(JSON.stringify(arrayJson))
    console.log(NAJ)
    Object.keys(NAJ).forEach((k) => {
        Object.keys(assignValue).forEach((o) => {
            NAJ[k] === assignValue[o] && (delete NAJ[k])
        })
    })
    return typeArray && boolean ? arrayJson_resetKeyOne(NAJ) : NAJ
}