import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_json } from '../type/json'

/**
 * 有效的验证码
 * @param value
 * @param callback
 * @param config
 * @returns callback
 */
export function validate_authCode(value, callback, config) {
  const functionName = 'validate' + '_' + 'authCode'
  arguments.length === 0 && throw_empty(functionName, 'value')
  arguments.length === 1 && throw_empty(functionName, 'callback')
  arguments.length === 2 && throw_empty(functionName, 'config')
  type_json(config) || throw_type(functionName, 'config', 'json')
  // 开始处理
  const length = config['authCodeLength'] ? config['authCodeLength'] : 4
  if (!value) {
    return callback(new Error('验证码不能为空'))
  } else if (/^[a-zA-Z0-9]+$/i.test(value)) {
    if (length !== value.length) {
      return callback(new Error(`验证码为${length}个字符`))
    } else {
      return callback()
    }
  } else {
    return callback(new Error('请输入正确的验证码'))
  }
}