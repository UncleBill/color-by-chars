const colorByChars = require('./color-by-chars')

const examples = [
  'Hi',
  'Hello World',
  'Brendan Eich',
  'IceFrog',
  '举杯邀明月，对影成三人', // Chinese poetry
  '孙悟空' // Chinese myth character
]
examples.forEach(chars => {
  let color = colorByChars(chars)
  console.log(chars, '=>', color);
})
