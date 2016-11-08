'use strict'

module.exports = {
  add: (a, b) => {
    if(typeof(a) !== typeof(b) || typeof(a) === 'string' && typeof(b) === 'string') {
      return false
    } else{
      return a + b
    }
  }
}
