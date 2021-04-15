import { class_add } from '../src/class/add'
import { class_has } from '../src/class/has'
import { class_remove } from '../src/class/remove'
import { class_toggle } from '../src/class/toggle'

export function _class_add(HTMLElement, className) {
  return class_add(HTMLElement, className)
}

export function _class_has(HTMLElement, className) {
  return class_has(HTMLElement, className)
}

export function _class_remove(HTMLElement, className) {
  return class_remove(HTMLElement, className)
}

export function _class_toggle(HTMLElement, className) {
  return class_toggle(HTMLElement, className)
}