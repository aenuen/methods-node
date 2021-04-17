import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'

/**
 * 价格大写
 * @param {number|string} number
 * @returns {string}
 */
export function number_priceBigWrite(number) {
  const functionName = 'number' + '_' + 'priceBigWrite'
  arguments.length === 0 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  const fraction = ['角', '分'],
    digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
    unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']],
    head = number < 0 ? '欠' : ''
  number = Math.abs(number)
  let string = ''
  for (var i = 0; i < fraction.length; i++) {
    string += (digit[Math.floor(number * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  string = string || '整'
  number = Math.floor(number)
  for (let i = 0; i < unit[0].length && number > 0; i++) {
    var dot = ''
    for (let j = 0; j < unit[1].length && number > 0; j++) {
      dot = digit[number % 10] + unit[1][j] + dot
      number = Math.floor(number / 10)
    }
    string = dot.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + string
  }
  return head + string.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}
