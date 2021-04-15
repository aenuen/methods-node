import { arrayJson_chunk } from '../src/arrayJson/chunk'
import { arrayJson_deleteAssignKey } from '../src/arrayJson/deleteAssignKey'
import { arrayJson_deleteAssignValue } from '../src/arrayJson/deleteAssignValue'
import { arrayJson_deleteEmpty } from '../src/arrayJson/deleteEmpty'
import { arrayJson_holdAssignKey } from '../src/arrayJson/holdAssignKey'
import { arrayJson_holdAssignValue } from '../src/arrayJson/holdAssignValue'
import { arrayJson_keyName } from '../src/arrayJson/keyName'
import { arrayJson_random } from '../src/arrayJson/random'
import { arrayJson_repeat } from '../src/arrayJson/repeat'
import { arrayJson_resetKeyAll } from '../src/arrayJson/resetKeyAll'
import { arrayJson_resetKeyOne } from '../src/arrayJson/resetKeyOne'
import { arrayJson_reverse } from '../src/arrayJson/reverse'
import { arrayJson_same } from '../src/arrayJson/same'
import { arrayJson_whetherIn } from '../src/arrayJson/whetherIn'

export function _arrayJson_chunk(arrayJson, size) {
  return arrayJson_chunk(arrayJson, size)
}

export function _arrayJson_deleteAssignKey(arrayJson, assignKey) {
  return arrayJson_deleteAssignKey(arrayJson, assignKey)
}

export function _arrayJson_deleteAssignValue(arrayJson, assignValue, boolean) {
  return arrayJson_deleteAssignValue(arrayJson, assignValue, boolean)
}

export function _arrayJson_deleteEmpty(arrayJson, other) {
  return arrayJson_deleteEmpty(arrayJson, other)
}

export function _arrayJson_holdAssignKey(arrayJson, holdKey) {
  return arrayJson_holdAssignKey(arrayJson, holdKey)
}

export function _arrayJson_deleteAssignValue(arrayJson, holdValue) {
  return arrayJson_deleteAssignValue(arrayJson, holdValue)
}

export function _arrayJson_keyName(arrayJson) {
  return arrayJson_keyName(arrayJson)
}

export function _arrayJson_random(arrayJson, number) {
  return arrayJson_random(arrayJson, number)
}

export function _arrayJson_repeat(arrayJson, boolean) {
  return arrayJson_repeat(arrayJson, boolean)
}

export function _arrayJson_resetKeyAll(arrayJson) {
  return arrayJson_resetKeyAll(arrayJson)
}

export function _arrayJson_resetKeyOne(arrayJson) {
  return arrayJson_resetKeyOne(arrayJson)
}

export function _arrayJson_reverse(arrayJson) {
  return arrayJson_reverse(arrayJson)
}

export function _arrayJson_same(arrayJson, assignArray, keyName, boolean) {
  return arrayJson_same(arrayJson, assignArray, keyName, boolean)
}

export function _arrayJson_whetherIn(arrayJson, value, boolean) {
  return arrayJson_whetherIn(arrayJson, value, boolean)
}