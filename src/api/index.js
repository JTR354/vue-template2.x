// 将所有的接口请求都通过这个统一输出
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireApiModules = require.context(
  '.',
  false,
  // /\.\/([\w-][^index])+\.js$/
  /^((?!index).)*\.js$/
)

const API = {}

requireApiModules.keys().forEach((fileName) => {
  const moduleConfig = requireApiModules(fileName)
  const moduleName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.js/, '')))
  API[moduleName] = moduleConfig.default || moduleConfig
})

export default API
