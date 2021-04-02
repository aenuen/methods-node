export function throw_empty(func, paramName) {
  throw new Error(func + '：参数 ' + paramName + ' 不能为空')
} 