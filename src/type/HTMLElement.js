import {throw_empty} from "../throw/empty"

/**
 * 是否 element 对象
 * @param value
 * @returns {boolean}
 */
export function type_HTMLElement(value) {
    const functionName = "type" + "_" + "element"
    arguments.length === 0 && throw_empty(functionName, "value")
    // 开始处理
    let d = document.createElement("div")
    try {
        d.appendChild(value.cloneNode(true))
        return value.nodeType === 1
    } catch (e) {
        return value === window || value === document
    }
}