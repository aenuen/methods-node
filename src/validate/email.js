import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_json } from '../type/json'
import { format_email } from '../format/email'


/**
 * 有效的电子邮箱
 * @param value
 * @param callback
 * @param config
 * @returns callback
 */
export function validate_email(value, callback, config) {
  const functionName = 'validate' + '_' + 'email'
  arguments.length === 0 && throw_empty(functionName, 'value')
  arguments.length === 1 && throw_empty(functionName, 'callback')
  arguments.length === 2 && throw_empty(functionName, 'config')
  type_json(config) || throw_type(functionName, 'config', 'json')
  // 开始处理
  const eMin = config['emailMin'] ? config['emailMin'] : 5
  const eMax = config['emailMax'] ? config['emailMax'] : 30
  if (!value) {
    return callback(new Error('电子邮箱不能为空'))
  } else if (format_email(value)) {
    const length = value.length
    if (length < eMin || length > eMax) {
      return callback(new Error(`电子邮箱在${eMin}-${eMax}个字符之间`))
    } else {
      return callback()
    }
  } else {
    return callback(new Error('请输入正确的电子邮箱'))
  }
}