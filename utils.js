const m = require('mathjs')

const objPropertyNames = (obj) => Object.getOwnPropertyNames(obj)
const objFunctions = obj => objPropertyNames(obj).filter(x => typeof obj[x] === 'function' )


module.exports = {

objPropertyNames,
objFunctions

}
