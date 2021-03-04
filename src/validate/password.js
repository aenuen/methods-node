import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_json} from "../type/json"


/**
 * 有效的密码
 * @param value
 * @param callback
 * @param config
 * @returns callback
 */
export function validate_password(value, callback, config) {
    const functionName = "validate" + "_" + "password"
    arguments.length === 0 && throw_empty(functionName, "value")
    arguments.length === 1 && throw_empty(functionName, "callback")
    arguments.length === 2 && throw_empty(functionName, "config")
    type_json(config) || throw_type(functionName, "config", "json")
    // 开始处理
    const pMin = config["passwordMin"] ? config["passwordMin"] : 6
    const pMax = config["passwordMax"] ? config["passwordMax"] : 30
    const length = value.length
    if (!value) {
        return callback(new Error("密码不能为空"))
    } else if (length < pMin || length > pMax) {
        return callback(new Error(`密码在${pMin}-${pMax}个字符之间`))
    } else {
        return callback()
    }
}