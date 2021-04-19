import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'

/**
 * 迪卡尔积
 * @example array_diKaErJi([1,2,3],[1,2,3],[1,2,3])
 * @example array_diKaErJi([[1,2,3],[1,2,3],[1,2,3]])
 * @returns {array}
 */
export function array_diKaErJi() {
  const functionName = 'array' + '_' + 'diKaErJi'
  arguments.length === 0 && throw_empty(functionName, '1')
  const t = arguments.length
  let n = []
  if (t === 0) {
    for (let r = 0; r < t; r++) n.push(arguments[r])
  } else {
    n = arguments[0]
  }
  Object.keys(n).forEach((r, t) => {
    type_array(n[r]) || throw_type(functionName, t + 1, 'array')
    n[r].length === 0 && throw_empty(functionName, t + 1 + '的数组')
  })
  // 开始处理
  const a = function(r, t) {
    r = !(r instanceof Array) ? [r] : r
    let e = (r).slice(0)
    return e.push(t), e
  }
  return function(e) {
    const n = e.length
    if (0 === n) return []
    if (1 === n) return e[0]
    {
      let t = e[0]
      for (let r = 1; r < n; r++) t = function(e, n) {
        let l = []
        for (let t = 0; t < e.length; t++) for (let r = 0; r < n.length; r++) l.push(a(e[t], n[r]))
        return l
      }(t, e[r])
      return t
    }
  }(1 < arguments.length ? arguments : arguments[0])
}