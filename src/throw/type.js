export function throw_type(func, paramName, type) {
  throw new Error(func + '：参数 ' + paramName + ' 不是 ' + type + ' 类型')
}