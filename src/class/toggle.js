import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_HTMLElement} from "../type/HTMLElement"
import {type_string} from "../type/string"
import {class_add} from "./add"
import {class_remove} from "./remove"

/**
 * 切换 HTMLElement 的一个样式
 * @param {HTMLElement} HTMLElement
 * @param {string} className
 */
export function class_toggle(HTMLElement, className) {
    // 检查参数
    const functionName = "class" + "_" + "toggle"
    arguments.length === 0 && throw_empty(functionName, "HTMLElement")
    type_HTMLElement(HTMLElement) || throw_type(functionName, "HTMLElement", "HTMLElement")
    arguments.length === 1 && throw_empty(functionName, "className")
    type_string(className) || throw_type(functionName, "className", "string")
    // 开始处理
    HTMLElement.className.indexOf(className) === -1 ?
        class_add(HTMLElement, className) : class_remove(HTMLElement, className)
}