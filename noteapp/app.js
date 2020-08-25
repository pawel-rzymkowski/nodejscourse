const validator = require('validator')
const getNotes = require('./utils')

const msg = getNotes()
const m = validator.isEmail('sdf@pl.pl')

console.log(msg)
console.log(m)
