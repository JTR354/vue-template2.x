---
to: src/api/<%= h.inflection.dasherize(name) %>.js
---
import request from '@utils/http'

export default {
  // xxx
  xxx(args) {
    const url = `xxx`
    return request.get({url, ...args})
  }
}
