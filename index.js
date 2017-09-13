const dotProduct = require('./utils').dotProduct
const nSaturationStatus = require('./n-saturation-status')

module.exports = (amounts, weights, values, cap) => {
  const saturations = nSaturationStatus(amounts, weights, cap)

  const init = saturations.pop()
  const initValue = dotProduct(init[0], values)
  init[2] = initValue

  let ret = [init]
  saturations.forEach((sat) => {
    const thisAmounts = sat[0]
    const thisValue = dotProduct(thisAmounts, values)
    sat[2] = thisValue
    if (thisValue > ret[0][2]) {
      ret = [sat]
    } else if (thisValue === ret[0][2]) {
      ret.push(sat)
    }
  })

  return ret
}
