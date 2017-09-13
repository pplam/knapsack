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

function nStatusRecursion(h) {
  if (h.length === 1) return [
    ...Array(h[0]).keys()
  ].map(e => [e + 1])
  const last = h[h.length - 1]
  const subSet = h.slice(0, -1)
  const subStatus = nStatus(subSet)
  return subStatus.reduce((ret, s) => {
    for (let i = 1; i <= last; i++) {
      ret.push(s.concat([i]))
    }
    return ret
  }, [])
}

function nStatusIteration(h) {
  const dim = h.length
  const init = new Array(dim).fill(0)
  const ret = [init]

  for (let i = 0; i < dim; i++) {
    const len = ret.length
    for (let j = 1; j <= h[i]; j++) {
      for (let k = 0; k < len; k++) {
        const ele = ret[k]
        const newEle = ele.slice()
        newEle[i] += j
        ret.push(newEle)
      }
    }
  }

  return ret
}

function nStatusInverseIteration(h) {
  const dim = h.length
  const ret = [h]

  for (let i = 0; i < dim; i++) {
    const len = ret.length
    for (let j = 1; j <= h[i]; j++) {
      for (let k = 0; k < len; k++) {
        const ele = ret[k]
        const newEle = ele.slice()
        newEle[i] -= j
        ret.push(newEle)
      }
    }
  }

  return ret
}
