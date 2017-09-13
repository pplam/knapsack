module.exports = (h) => {
  const dim = h.length
  const queue = [[h, dim - 1]]
  const ret = [h]

  while (queue.length > 0) {
    const pack = queue.shift()
    const pivot = pack[1]
    for (let i = 0; i <= pivot; i++) {
      if (pack[0][i] === 0) continue
      const nextAmounts = pack[0].slice()
      nextAmounts[i]--
      queue.push([nextAmounts, i])
      ret.push(nextAmounts)
    }
  }

  return ret
}
