module.exports = [
  {
    type: 'input',
    name: 'name',
    message: '名称:',
    validate(value) {
      if (!value.length) {
        return '工具类方法名称不能为空！'
      }
      return true
    }
  }
]
