import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_json } from '../type/json'
import { type_number } from '../type/number'
import { have_assign } from '../have/assign'
import { validate_email } from './email'
import { validate_mobile } from './mobile'
import { validate_username } from './username'


/**
 * 有效的账号
 * @param value
 * @param callback
 * @param config
 * @returns callback
 */
export function validate_account(value, callback, config) {
  const functionName = 'validate' + '_' + 'account'
  arguments.length === 0 && throw_empty(functionName, 'value')
  arguments.length === 1 && throw_empty(functionName, 'callback')
  arguments.length === 2 && throw_empty(functionName, 'config')
  type_json(config) || throw_type(functionName, 'config', 'json')
  // 开始处理
  if (!value) {
    return callback(new Error('账号不能为空'))
  } else {
    if (type_number(value)) {
      return validate_mobile(value, callback)
    } else if (have_assign(value, '@')) {
      return validate_email(value, callback, config)
    } else {
      return validate_username(value, callback, config)
    }
  }
}