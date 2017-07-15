const asar = require('asar')
const { resolve } = require('path')

const src = resolve(__dirname, 'src')
const dist = resolve(__dirname, 'dist')

asar.craetePackage(src, dist, () => {
  console.log('Asar done.')
})
