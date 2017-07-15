const asar = require('asar')
const { resolve } = require('path')

const src = resolve(__dirname, 'src')
const name = 'starer.asar'

asar.createPackage(src, name, () => {
  console.log('Asar done.')
})
