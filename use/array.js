import { array_diKaErJi } from '../src/array/diKaErJi'
import { array_order } from '../src/array/order'
import { array_orderField } from '../src/array/orderField'
import { array_toStringAssign } from '../src/array/toStringAssign'
import { array_xyReplace } from '../src/array/xyReplace'

export function _array_diKaErJi() {
  return function(e) {
    return array_diKaErJi(e)
  }(1 < arguments.length ? arguments : arguments[0])
}

export function _array_order(array, order) {
  return array_order(array, order)
}

export function _array_orderField(array, field, order) {
  return array_orderField(array, field, order)
}

export function _array_toStringAssign(array, assign) {
  return array_toStringAssign(array, assign)
}

export function _array_xyReplace(array) {
  return array_xyReplace(array)
}