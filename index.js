#! /usr/bin/env node
const fs = require('fs')
const ncp = require('copy-paste')

let buff = fs.readFileSync(process.argv[2])
let enc = buff.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
ncp.copy(enc)
console.log('copied to clipboard')
console.log(enc)
