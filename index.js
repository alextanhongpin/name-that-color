const colors = require('./all.json')

const hexes = Object.keys(colors)

const findClosest = color => {
  const lowerColor = color.toLowerCase()
  const matches = hexes.filter(hex => hex.startsWith(lowerColor)).sort()
  return matches && matches[0]
}

const args = process.argv.slice(2)
switch (args.length) {
  case 1:
    let [hex] = args
    hex = hex.toLowerCase()
    if (colors[hex]) {
      return console.log(hex, colors[hex])
    }

    let result = null
    while (!result && hex.length) {
      hex = hex.slice(0, hex.length - 1)
      result = findClosest(hex)
    }
    console.log(hex, colors[result])
    return
  default:
    throw new Error('invalid arguments length')
}
console.log()
