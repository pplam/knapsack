module.exports = (amounts, weights, values, cap) => {
  const maxValue = 0
  const saturations = nSaturationStatus(amounts, weights, cap)
  const init = saturations.pop()
  const initValue = dotProduct(init[0], values)
  init[2] = initValue

  const ret = [init]
  saturationAmounts.forEach((a) => {
  })
}

function nSaturationStatus(amounts, weights, cap) {
  const dim = amounts.length
  const maxAmounts = amounts.slice()
  const maxWeight = dotProduct(weights, amounts)
  const queue = [[maxAmounts, maxWeight, dim - 1]]
  const ret = []

  while (queue.length > 0) {
    const pack = queue.shift()
    const currAmounts = pack[0]
    const currWeight = pack[1]
    const pivot = pack[2]

    if (currWeight <= cap) {
      ret.push([
        currAmounts,
        currWeight,
      ])
      continue
    }

    for (let i = 0; i <= pivot; i++) {
      if (currAmounts[i] === 0) continue
      const nextAmounts = currAmounts.slice()
      nextAmounts[i]--
      nextWeight = currWeight - weights[i]
      queue.push([nextAmounts, nextWeight, i])
    }
  }

  return ret
}

function dotProduct(v1, v2) {
  return v1.reduce((sum, val, idx) => {
    return sum + val * v2[idx]
  }, 0)
}
