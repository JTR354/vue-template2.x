module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'api文件名:',
    validate(value) {
      if (!value.length) {
        return '文件名不能为空！'
      }
      return true
    }
  }
]
